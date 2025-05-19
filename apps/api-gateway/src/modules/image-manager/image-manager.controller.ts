import {
  Controller,
  Inject,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { ImageManagerService } from './image-manager.service';

@Controller('image-service')
export class ImageManagerController {
  constructor(@Inject() private readonly client: ImageManagerService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    const result = this.client.uploadImage(file);
    return result;
  }
}
