import { Injectable } from '@nestjs/common';

@Injectable()
export class ImageManagerAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
