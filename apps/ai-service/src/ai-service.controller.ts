import { Controller } from '@nestjs/common';
import { AiService } from './ai-service.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AI_SERVICE_EVENTS } from '@/constants';

@Controller()
export class AiServiceController {
  constructor(private readonly aiService: AiService) {}

  @MessagePattern({ cmd: AI_SERVICE_EVENTS.ANALYZE_IMAGE })
  async analyzeImage(@Payload() imageUrl: string) {
    const result = await this.aiService.analyzeImage(imageUrl);
    return result;
  }
}
