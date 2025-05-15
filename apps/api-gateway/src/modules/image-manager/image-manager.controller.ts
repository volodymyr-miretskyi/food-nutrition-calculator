import { Controller, Post } from '@nestjs/common';

import { ImageManagerService } from './image-manager.service';

@Controller('image-manager')
export class ImageManagerController {
  constructor(private readonly imageManagerService: ImageManagerService) {}

  @Post()
  async uploadImage() {
    const result = await this.imageManagerService.uploadImage();
    return result;
  }
}
