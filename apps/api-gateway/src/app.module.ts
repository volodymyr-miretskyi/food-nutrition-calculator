import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ImageManagerModule } from './modules/image-manager/image-manager.module';
import { RabbitMQService } from './messaging/rabbitmq/rabbitmq.service';

@Module({
  imports: [
    ImageManagerModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, RabbitMQService],
})
export class AppModule {}
