import { AIRepository } from '@/libs/common/repositories/ai/ai.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AiService {
  constructor(private readonly aiRepository: AIRepository) {}

  async analyzeImage(imageUrl: string) {
    const response = await this.aiRepository.analyzeImage(imageUrl);

    if (
      response.type === 'message' &&
      response.content[0].type === 'output_text'
    ) {
      const result = JSON.parse(response.content[0].text);
      return result;
    }

    throw new Error('Unexpected response format from OpenAI');
  }
}
