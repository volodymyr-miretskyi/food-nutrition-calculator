import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './modules/auth/auth.module';
import { MealsModule } from './modules/meals/meals.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, MealsModule],
})
export class AppModule {}
