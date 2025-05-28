import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { AiService } from './ai-service.service';
import { IIngredient } from '@interfaces/ai-service/ai-service.interface';
import { AI_SERVICE_EVENTS } from '@/constants';

@Controller()
export class AiServiceController {
  constructor(private readonly aiService: AiService) {}

  @MessagePattern({ cmd: AI_SERVICE_EVENTS.ANALYZE_IMAGE })
  async analyzeImage(@Payload() imageUrl: string) {
    const result = await this.aiService.analyzeImage(imageUrl);
    return result;
  }

  @MessagePattern({ cmd: AI_SERVICE_EVENTS.CALCULATE_NUTRIENTS })
  async calculateNutrients(@Payload() ingredients: IIngredient[]) {
    const result = await this.aiService.calculateNutrients(ingredients);
    return result;
  }
}
