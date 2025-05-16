import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { ImageServiceService } from './image-service.service';
import { IMAGE_SERVICE_EVENTS } from '@/constants';

@Controller()
export class ImageServiceController {
  constructor(private readonly imageServiceService: ImageServiceService) {}

  @Get()
  getHello(): string {
    return this.imageServiceService.getHello();
  }

  @MessagePattern({ cmd: IMAGE_SERVICE_EVENTS.UPLOAD })
  async handleUploadImage(@Payload() params: any) {
    const result = await this.imageServiceService.uploadImage(params);
    return result;
  }
}
