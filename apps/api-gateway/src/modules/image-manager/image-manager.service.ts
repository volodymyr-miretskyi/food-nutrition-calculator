import { Injectable } from '@nestjs/common';

@Injectable()
export class ImageManagerService {
  async uploadImage() {
    return { message: 'uploaded successfully' }
  }
}
