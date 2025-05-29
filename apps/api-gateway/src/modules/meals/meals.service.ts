import { ClientProxy } from '@nestjs/microservices';
import { Inject, Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

import { ImageDocument } from '@schemas/image.schema';
import { Meal } from '@schemas/record.schema';

import { S3Service } from '@/libs/aws/s3/src/s3.service';
import {
  IAnalyzeImageResponse,
  IIngredient,
} from '@interfaces/ai-service/ai-service.interface';
import { MealsRepository } from '@repositories/meals/meals.repository';
import { AI_SERVICE_EVENTS, IMAGE_SERVICE_EVENTS, SERVICES } from '@/constants';

@Injectable()
export class MealsService {
  constructor(
    @Inject(SERVICES.IMAGE_SERVICE) private readonly imageClient: ClientProxy,
    @Inject(SERVICES.AI_SERVICE) private readonly aiClient: ClientProxy,
    @Inject() private readonly mealsRepository: MealsRepository,
    @Inject() private readonly s3: S3Service,
  ) {}

  async analyzeImage(file: Express.Multer.File) {
    const image = await lastValueFrom(
      this.imageClient.send<ImageDocument>(
        { cmd: IMAGE_SERVICE_EVENTS.UPLOAD },
        file,
      ),
    );

    if (!image) {
      throw new Error('Image upload failed');
    }

    const imageUrl = await this.s3.getPresignedUrl(image.key);

    const response: IAnalyzeImageResponse = await lastValueFrom(
      this.aiClient.send({ cmd: AI_SERVICE_EVENTS.ANALYZE_IMAGE }, imageUrl),
    );

    return { imageId: image._id, ingredients: response.ingredients };
  }

  async calculateNutrients(ingredients: IIngredient[]) {
    const result = this.aiClient.send(
      { cmd: AI_SERVICE_EVENTS.CALCULATE_NUTRIENTS },
      { ingredients },
    );
    return result;
  }

  async saveRecord(params: Meal) {
    const record = await this.mealsRepository.saveMeal(params);
    return record;
  }

  async getAllRecords() {
    const records = await this.mealsRepository.getAllMeals();
    return records;
  }
}
