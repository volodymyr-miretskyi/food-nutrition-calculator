import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { S3Module } from '@libs/aws/s3/src/s3.module';
import { Photo, PhotoSchema } from '@schemas/photo.schema';

import { ImageServiceService } from './image-service.service';
import { ImageServiceController } from './image-service.controller';
import { DBModule } from '@db/src/db.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: Photo.name, schema: PhotoSchema }]),
    DBModule,
    S3Module,
  ],
  controllers: [ImageServiceController],
  providers: [ImageServiceService],
})
export class ImageServiceModule {}
