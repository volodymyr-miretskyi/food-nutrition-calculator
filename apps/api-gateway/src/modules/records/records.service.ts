import { ClientProxy } from '@nestjs/microservices';
import { Inject, Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

import { AI_SERVICE_EVENTS, IMAGE_SERVICE_EVENTS, SERVICES } from '@/constants';
import { S3Service } from '@/libs/aws/s3/src/s3.service';
import { Image } from '@schemas/image.schema';

@Injectable()
export class RecordsService {
  constructor(
    @Inject(SERVICES.IMAGE_SERVICE) private readonly imageClient: ClientProxy,
    @Inject(SERVICES.AI_SERVICE) private readonly aiClient: ClientProxy,
    @Inject() private readonly s3: S3Service,
  ) {}

  async analyzeImage(file: Express.Multer.File) {
    const image = await lastValueFrom(
      this.imageClient.send<Image>({ cmd: IMAGE_SERVICE_EVENTS.UPLOAD }, file),
    );

    if (!image) {
      throw new Error('Image upload failed');
    }

    const imageUrl = await this.s3.getPresignedUrl(image.key);

    const result = this.aiClient.send(
      { cmd: AI_SERVICE_EVENTS.ANALYZE_IMAGE },
      imageUrl,
    );

    return result;
  }

  //TODO: Calculate nutrients
  async calculateNutrients() {}

  async getAllImages() {
    const result = this.imageClient.send(
      { cmd: IMAGE_SERVICE_EVENTS.GET_ALL },
      {},
    );
    return result;
  }
}
