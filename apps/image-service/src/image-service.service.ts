import { S3Service } from '@/libs/aws/s3/src/s3.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ImageServiceService {
  constructor(private readonly s3: S3Service) {}

  getHello(): string {
    return 'Hello World!';
  }

  async uploadImage(file: Express.Multer.File) {
    const result = await this.s3.upload(file);
    return result;
  }
}
