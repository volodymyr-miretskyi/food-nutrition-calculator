import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { DEFAULT_RABBIT_MQ_URL, QUEUES, SERVICES } from '@/constants';
import { AiController } from './ai.controller';
import { AiService } from './ai.service';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: SERVICES.AI_SERVICE,
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [
              configService.get<string>('RABBIT_MQ_URL') ??
                DEFAULT_RABBIT_MQ_URL,
            ],
            queue: QUEUES.AI_SERVICE,
            queueOptions: { durable: false },
          },
        }),
      },
    ]),
  ],
  controllers: [AiController],
  providers: [AiService],
})
export class AiModule {}
