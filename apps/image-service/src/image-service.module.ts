import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { S3Module } from '@/libs/aws/s3/src/s3.module';

import { ImageServiceService } from './image-service.service';
import { ImageServiceController } from './image-service.controller';

@Module({
  imports: [ConfigModule.forRoot(), S3Module],
  controllers: [ImageServiceController],
  providers: [ImageServiceService],
})
export class ImageServiceModule {}
