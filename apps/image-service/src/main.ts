import { NestFactory } from '@nestjs/core';
import { ImageServiceModule } from './image-service.module';

async function bootstrap() {
  const app = await NestFactory.create(ImageServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
