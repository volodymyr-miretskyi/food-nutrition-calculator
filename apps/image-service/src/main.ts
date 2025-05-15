import { NestFactory } from '@nestjs/core';
import { ImageManagerAppModule } from './image-manager-app.module';

async function bootstrap() {
  const app = await NestFactory.create(ImageManagerAppModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
