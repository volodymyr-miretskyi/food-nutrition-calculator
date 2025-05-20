import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ImageManagerModule } from './modules/image-manager/image-manager.module';

@Module({
  imports: [ImageManagerModule, ConfigModule.forRoot()],
})
export class AppModule {}
