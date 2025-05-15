import { Controller, Get } from '@nestjs/common';
import { ImageServiceService } from './image-service.service';

@Controller()
export class ImageServiceController {
  constructor(private readonly imageServiceService: ImageServiceService) {}

  @Get()
  getHello(): string {
    return this.imageServiceService.getHello();
  }
}
