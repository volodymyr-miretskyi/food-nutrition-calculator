import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { DBModule } from '@db/src/db.module';
import { S3Module } from '@/libs/aws/s3/src/s3.module';
import { Record, RecordSchema } from '@schemas/record.schema';
import { DEFAULT_RABBIT_MQ_URL, QUEUES, SERVICES } from '@/constants';

import { RecordsController } from './records.controller';
import { RecordsService } from './records.service';

@Module({
  imports: [
    DBModule,
    S3Module,
    MongooseModule.forFeature([{ name: Record.name, schema: RecordSchema }]),
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
  controllers: [RecordsController],
  providers: [RecordsService],
})
export class RecordsModule {}
