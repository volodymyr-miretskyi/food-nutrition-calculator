import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AiServiceController } from './ai-service.controller';
import { AiService } from './ai-service.service';
import { AIRepository } from '@/libs/common/repositories/ai/ai.repository';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AiServiceController],
  providers: [AiService, AIRepository],
})
export class AiServiceModule {}
