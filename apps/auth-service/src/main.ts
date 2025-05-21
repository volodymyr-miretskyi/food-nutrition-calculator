import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';

import { DEFAULT_RABBIT_MQ_URL, QUEUES } from '@/constants';

import { AuthServiceModule } from './auth-service.module';

async function bootstrap() {
  const RABBIT_MQ_URL = process.env.RABBIT_MQ_URL ?? DEFAULT_RABBIT_MQ_URL;

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthServiceModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [RABBIT_MQ_URL],
        queue: QUEUES.AUTH_SERVICE,
        queueOptions: {
          durable: false,
        },
      },
    },
  );

  await app.listen();
}
bootstrap();
