import { IAnalyzeImageResponse } from '@/libs/common/interfaces/ai-service/ai-service.interface';
import { Inject, Injectable } from '@nestjs/common';

import { AIRepository } from '@repositories/ai/ai.repository';

@Injectable()
export class AiService {
  constructor(@Inject() private readonly aiRepository: AIRepository) {}

  async analyzeImage(imageUrl: string): Promise<IAnalyzeImageResponse> {
    const response =
      await this.aiRepository.analyzeImage<IAnalyzeImageResponse>(imageUrl);
    return response;
  }
}
