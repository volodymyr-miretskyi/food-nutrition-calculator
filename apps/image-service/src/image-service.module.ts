import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { RabbitMQService } from './messaging/rabbitmq/rabbitmq.service';
import { ImageServiceService } from './image-service.service';
import { ImageServiceController } from './image-service.controller';

import { DEFAULT_RABBIT_MQ_URL, QUEUES, SERVICES } from '@/constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.IMAGE_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBIT_MQ_URL || DEFAULT_RABBIT_MQ_URL],
          queue: QUEUES.FOOD_NUTRITION_CALCULATOR,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [ImageServiceController],
  providers: [ImageServiceService, RabbitMQService],
})
export class ImageServiceModule {}
