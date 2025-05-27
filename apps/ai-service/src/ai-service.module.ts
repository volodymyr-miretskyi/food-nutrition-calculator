import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AiServiceController } from './ai-service.controller';
import { AiService } from './ai-service.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AiServiceController],
  providers: [AiService],
})
export class AiServiceModule {}
