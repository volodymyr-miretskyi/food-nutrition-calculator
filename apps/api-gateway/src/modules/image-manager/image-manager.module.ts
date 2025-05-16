import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { ImageManagerService } from './image-manager.service';
import { ImageManagerController } from './image-manager.controller';
import { DEFAULT_RABBIT_MQ_URL, QUEUES, SERVICES } from '@/constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.IMAGE_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBIT_MQ_URL || DEFAULT_RABBIT_MQ_URL],
          queue: QUEUES.IMAGE_SERVICE,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  providers: [ImageManagerService],
  controllers: [ImageManagerController],
})
export class ImageManagerModule {}
