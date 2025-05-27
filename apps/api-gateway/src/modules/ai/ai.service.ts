import { ClientProxy } from '@nestjs/microservices';
import { Inject, Injectable } from '@nestjs/common';

import { AI_SERVICE_EVENTS, SERVICES } from '@/constants';

@Injectable()
export class AiService {
  constructor(
    @Inject(SERVICES.AI_SERVICE) private readonly client: ClientProxy,
  ) {}

  async analyzeImage(imageUrl: string) {
    const result = this.client.send(
      { cmd: AI_SERVICE_EVENTS.ANALYZE_IMAGE },
      imageUrl,
    );
    return result;
  }
}
