import { Module } from '@nestjs/common';

import { RabbitMQService } from './messaging/rabbitmq/rabbitmq.service';
import { ImageServiceService } from './image-service.service';
import { ImageServiceController } from './image-service.controller';

@Module({
  controllers: [ImageServiceController],
  providers: [ImageServiceService, RabbitMQService],
})
export class ImageServiceModule {}
