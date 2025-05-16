import { Injectable } from '@nestjs/common';

@Injectable()
export class ImageServiceService {
  getHello(): string {
    return 'Hello World!';
  }

  async uploadImage(params) {
    return params;
  }
}
