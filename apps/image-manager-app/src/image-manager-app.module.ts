import { Module } from '@nestjs/common';
import { ImageManagerAppController } from './image-manager-app.controller';
import { ImageManagerAppService } from './image-manager-app.service';

@Module({
  imports: [],
  controllers: [ImageManagerAppController],
  providers: [ImageManagerAppService],
})
export class ImageManagerAppModule {}
