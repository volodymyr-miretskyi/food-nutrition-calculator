import { ClientProxy } from '@nestjs/microservices';
import { Inject, Injectable } from '@nestjs/common';

import { IMAGE_SERVICE_EVENTS, SERVICES } from '@/constants';

@Injectable()
export class ImageManagerService {
  constructor(
    @Inject(SERVICES.IMAGE_SERVICE) private readonly client: ClientProxy,
  ) {}

  async uploadImage(params: Express.Multer.File) {
    const result = this.client.send(
      { cmd: IMAGE_SERVICE_EVENTS.UPLOAD },
      params,
    );
    return result;
  }
}
