import { Body, Controller, Inject, Post } from '@nestjs/common';

import { ImageManagerService } from './image-manager.service';

@Controller('image-service')
export class ImageManagerController {
  constructor(@Inject() private readonly client: ImageManagerService) {}

  @Post('upload')
  async uploadImage(@Body() params: any) {
    const result = this.client.uploadImage(params);
    return result;
  }
}
