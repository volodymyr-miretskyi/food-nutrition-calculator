import { Module } from '@nestjs/common';
import { AiServiceController } from './ai-service.controller';
import { AiService } from './ai-service.service';

@Module({
  imports: [],
  controllers: [AiServiceController],
  providers: [AiService],
})
export class AiServiceModule {}
