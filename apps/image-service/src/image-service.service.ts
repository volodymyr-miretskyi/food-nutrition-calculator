import { Injectable } from '@nestjs/common';

@Injectable()
export class ImageServiceService {
  getHello(): string {
    return 'Hello World!';
  }

  async uploadImage(file: Express.Multer.File) {
    const filename = file.originalname;
    return { filename };
  }
}
