import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { DEFAULT_RABBIT_MQ_URL, QUEUES } from '@/constants';
import { AiServiceModule } from './ai-service.module';

async function bootstrap() {
  const RABBIT_MQ_URL = process.env.RABBIT_MQ_URL ?? DEFAULT_RABBIT_MQ_URL;

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AiServiceModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [RABBIT_MQ_URL],
        queue: QUEUES.AI_SERVICE,
        queueOptions: {
          durable: false,
        },
      },
    },
  );

  await app.listen();
}
bootstrap();
