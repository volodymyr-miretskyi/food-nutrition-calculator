import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { S3Service } from '@libs/aws/s3/src/s3.service';
import { Photo } from '@db/schemas/photo.schema';
import { SavePhotoDto } from '@dto/photo.dto';

@Injectable()
export class ImageServiceService {
  constructor(
    @InjectModel(Photo.name) private photoModal: Model<Photo>,
    private readonly s3: S3Service,
  ) {}

  async uploadImage(file: Express.Multer.File) {
    const s3result = await this.s3.upload(file);
    const params: SavePhotoDto = {
      ...s3result,
    };

    const photo = await this.photoModal.create(params);

    return photo;
  }
}
