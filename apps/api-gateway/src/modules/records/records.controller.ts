import {
  Controller,
  Get,
  Inject,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';
import { RecordsService } from './records.service';


@Controller('records')
export class RecordsController {
  constructor(@Inject() private readonly client: RecordsService) {}

  @Post('analyze-image')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    const result = this.client.analyzeImage(file);
    return result;
  }

  @Get('get-all')
  async getAllImages() {
    const result = this.client.getAllImages();
    return result;
  }
}
