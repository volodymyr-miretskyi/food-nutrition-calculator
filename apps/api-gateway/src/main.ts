import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { DEFAULT_RABBIT_MQ_URL, QUEUES } from '@/constants';

async function bootstrap() {
  const RABBIT_MQ_URL = process.env.RABBIT_MQ_URL || DEFAULT_RABBIT_MQ_URL;

  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   {
  //     transport: Transport.RMQ,
  //     options: {
  //       urls: [RABBIT_MQ_URL],
  //       queue: QUEUES.FOOD_NUTRITION_CALCULATOR,
  //       queueOptions: {
  //         durable: false,
  //       },
  //     },
  //   },
  // );

  // app.listen();

  const app = await NestFactory.create(AppModule);
  // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: [RABBIT_MQ_URL],
  //     queue: QUEUES.IMAGE_SERVICE,
  //     queueOptions: {
  //       durable: false,
  //     },
  //   },
  // });

  // await app.startAllMicroservices();
  // await app.startAllMicroservices();
  await app.listen(3000);
}

bootstrap();
