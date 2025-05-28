import OpenAI from 'openai';
import { Injectable } from '@nestjs/common';

import { OPENAI_MODELS, OPENAI_PROMPTS } from '@/constants';
import { IIngredient } from '@interfaces/ai-service/ai-service.interface';
import { extractJsonCodeBlockFromAIResponse } from '@utils/extractJSON';

@Injectable()
export class AIRepository {
  private openAIClient: OpenAI;

  constructor() {
    this.openAIClient = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async analyzeImage<T>(imageUrl: string): Promise<T> {
    const response = await this.openAIClient.responses.create({
      model: OPENAI_MODELS.GPT_4_O,
      input: [
        { role: 'user', content: OPENAI_PROMPTS.ANALYZE_IMAGE },
        {
          role: 'user',

          content: [
            {
              type: 'input_image',
              image_url: imageUrl,
              detail: 'high',
            },
          ],
        },
      ],
    });

    const output = response.output[0];

    if (output.type === 'message' && output.content[0].type === 'output_text') {
      const result = JSON.parse(
        extractJsonCodeBlockFromAIResponse(output.content[0].text),
      );
      return result;
    }

    throw new Error('Unexpected response format from OpenAI');
  }

  async calculateNutrients<T>(ingredients: IIngredient[]): Promise<T> {
    const response = await this.openAIClient.responses.create({
      model: OPENAI_MODELS.GPT_4_1_MINI,
      input: [
        { role: 'user', content: OPENAI_PROMPTS.CALCULATE_NUTRIENTS },
        { role: 'user', content: JSON.stringify(ingredients) },
      ],
    });

    const output = response.output[0];

    if (output.type === 'message' && output.content[0].type === 'output_text') {
      const result = JSON.parse(output.content[0].text);
      return result;
    }

    throw new Error('Unexpected response format from OpenAI');
  }
}
