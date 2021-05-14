import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // Set all nest endpoints under /api
  app.enableCors();
  await app.listen(5000);
}
bootstrap().then(() => console.log('Server Started on Port: ' + 5000));
