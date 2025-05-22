import { Body, Controller, Inject, Post } from '@nestjs/common';

import { AiService } from './ai.service';

@Controller('ai-service')
export class AiController {
  constructor(@Inject() private readonly aiService: AiService) {}

  @Post('analyze-image')
  async analyzeImage() {
    const result = await this.aiService.analyzeImage();
    return result;
  }
}
