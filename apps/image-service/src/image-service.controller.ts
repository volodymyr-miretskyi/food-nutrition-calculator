import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

import { ImageServiceService } from './image-service.service';
import { IMAGE_SERVICE_EVENTS } from '@/constants';

@Controller()
export class ImageServiceController {
  constructor(private readonly imageServiceService: ImageServiceService) {}

  @EventPattern(IMAGE_SERVICE_EVENTS.UPLOAD)
  async handleUploadImage(@Payload() params: any) {
    return this.imageServiceService.uploadImage(params);
  }
}
