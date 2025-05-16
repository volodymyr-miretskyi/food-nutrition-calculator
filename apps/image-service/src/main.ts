import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { ImageServiceModule } from './image-service.module';
import { DEFAULT_RABBIT_MQ_URL, QUEUES } from '@/constants';

async function bootstrap() {
  const RABBIT_MQ_URL = process.env.RABBIT_MQ_URL || DEFAULT_RABBIT_MQ_URL;

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ImageServiceModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [RABBIT_MQ_URL],
        queue: QUEUES.IMAGE_SERVICE,
        queueOptions: {
          durable: false,
        },
      },
    },
  );

  await app.listen();
}

bootstrap();
