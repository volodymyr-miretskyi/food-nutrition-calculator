import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './modules/auth/auth.module';
import { RecordsModule } from './modules/records/records.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, RecordsModule, RecordsModule],
})
export class AppModule {}
