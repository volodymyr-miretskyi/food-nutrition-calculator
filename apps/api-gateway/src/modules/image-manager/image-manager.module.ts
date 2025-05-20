import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { ImageManagerService } from './image-manager.service';
import { ImageManagerController } from './image-manager.controller';
import { DEFAULT_RABBIT_MQ_URL, QUEUES, SERVICES } from '@/constants';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: SERVICES.IMAGE_SERVICE,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [
              configService.get<string>('RABBIT_MQ_URL') ??
                DEFAULT_RABBIT_MQ_URL,
            ],
            queue: QUEUES.IMAGE_SERVICE,
            queueOptions: { durable: false },
          },
        }),
      },
    ]),
  ],
  providers: [ImageManagerService],
  controllers: [ImageManagerController],
})
export class ImageManagerModule {}
