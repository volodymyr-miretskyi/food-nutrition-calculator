import { Controller, Get } from '@nestjs/common';
import { ImageManagerAppService } from './image-manager-app.service';

@Controller()
export class ImageManagerAppController {
  constructor(private readonly imageManagerAppService: ImageManagerAppService) {}

  @Get()
  getHello(): string {
    return this.imageManagerAppService.getHello();
  }
}
