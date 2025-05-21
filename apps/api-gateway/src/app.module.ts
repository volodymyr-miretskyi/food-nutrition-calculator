import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ImageManagerModule } from './modules/image-manager/image-manager.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, ImageManagerModule],
})
export class AppModule {}
