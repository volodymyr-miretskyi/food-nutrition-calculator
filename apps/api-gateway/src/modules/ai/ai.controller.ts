import { Controller, Inject, Post } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';

import { AiService } from './ai.service';
import { IAnalyzeImageRequest } from '@interfaces/ai-service/ai-service.interface';

@Controller('ai-service')
export class AiController {
  constructor(@Inject() private readonly aiService: AiService) {}

  @Post('analyze-image')
  async analyzeImage(@Payload() body: IAnalyzeImageRequest) {
    const result = await this.aiService.analyzeImage(body.imageUrl);
    return result;
  }
}
