import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { DBModule } from '@db/src/db.module';
import { S3Module } from '@libs/aws/s3/src/s3.module';
import { Image, ImageSchema } from '@schemas/image.schema';
import { ImageRepository } from '@repositories/image/image.repository';

import { ImageServiceService } from './image-service.service';
import { ImageServiceController } from './image-service.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: Image.name, schema: ImageSchema }]),
    DBModule,
    S3Module,
  ],
  controllers: [ImageServiceController],
  providers: [ImageRepository, ImageServiceService],
})
export class ImageServiceModule {}
