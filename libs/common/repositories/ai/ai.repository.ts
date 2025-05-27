import OpenAI from 'openai';
import { Injectable } from '@nestjs/common';

import { OPENAI_MODELS, OPENAI_PROMPTS } from '@/constants';

@Injectable()
export class AIRepository {
  private openAIClient: OpenAI;

  constructor() {
    this.openAIClient = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async analyzeImage(imageUrl: string) {
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

    return output
  }
}
