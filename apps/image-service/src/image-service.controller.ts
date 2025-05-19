import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { ImageServiceService } from './image-service.service';
import { IMAGE_SERVICE_EVENTS } from '@/constants';

@Controller()
export class ImageServiceController {
  constructor(private readonly imageServiceService: ImageServiceService) {}

  @MessagePattern({ cmd: IMAGE_SERVICE_EVENTS.UPLOAD })
  async handleUploadImage(@Payload() file: Express.Multer.File) {
    const result = await this.imageServiceService.uploadImage(file);
    return result;
  }
}
