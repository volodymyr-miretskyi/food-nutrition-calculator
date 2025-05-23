import { Inject, Injectable } from '@nestjs/common';

import { S3Service } from '@libs/aws/s3/src/s3.service';

import { ImageRepository } from '@repositories/image/image.repository';
import { Image } from '@schemas/image.schema';

@Injectable()
export class ImageServiceService {
  constructor(
    @Inject() private imageRepository: ImageRepository,
    private readonly s3: S3Service,
  ) {}

  async uploadImage(file: Express.Multer.File) {
    const s3result = await this.s3.upload(file);
    const params: Image = {
      ...s3result,
    };

    const image = await this.imageRepository.saveImage(params);

    return image;
  }
}
