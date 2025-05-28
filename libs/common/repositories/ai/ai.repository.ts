import OpenAI from 'openai';
import { Injectable } from '@nestjs/common';

import { OPENAI_MODELS, OPENAI_PROMPTS } from '@/constants';
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
      console.log('output.content[0].text', output.content[0].text);

      const result = JSON.parse(output.content[0].text);
      return result;
    }

    throw new Error('Unexpected response format from OpenAI');
  }
}
