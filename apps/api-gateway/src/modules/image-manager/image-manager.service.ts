import { ClientProxy } from '@nestjs/microservices';
import { Inject, Injectable } from '@nestjs/common';

import { IMAGE_SERVICE_EVENTS, SERVICES } from '@/constants';

@Injectable()
export class ImageManagerService {
  constructor(
    @Inject(SERVICES.IMAGE_SERVICE) private readonly client: ClientProxy,
  ) {}

  async uploadImage(params: any) {
    const result = this.client.emit(IMAGE_SERVICE_EVENTS.UPLOAD, params);
    return result;
  }
}
