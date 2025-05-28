import { Inject, Injectable } from '@nestjs/common';

import { AIRepository } from '@repositories/ai/ai.repository';
import {
  IAnalyzeImageResponse,
  ICalculateNutrientsResponse,
  INutrient,
} from '@interfaces/ai-service/ai-service.interface';

@Injectable()
export class AiService {
  constructor(@Inject() private readonly aiRepository: AIRepository) {}

  async analyzeImage(imageUrl: string): Promise<IAnalyzeImageResponse> {
    const response =
      await this.aiRepository.analyzeImage<IAnalyzeImageResponse>(imageUrl);
    return response;
  }

  async calculateNutrients(
    nutrients: INutrient[],
  ): Promise<ICalculateNutrientsResponse> {
    const response =
      await this.aiRepository.calculateNutrients<ICalculateNutrientsResponse>(
        nutrients,
      );
    return response;
  }
}
