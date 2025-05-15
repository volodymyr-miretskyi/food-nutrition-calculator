import { Module } from '@nestjs/common';
import { ImageManagerService } from './image-manager.service';
import { ImageManagerController } from './image-manager.controller';

@Module({
  providers: [ImageManagerService],
  controllers: [ImageManagerController],
})
export class ImageManagerModule {}
