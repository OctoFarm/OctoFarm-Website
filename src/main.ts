import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // Set all nest endpoints under /api
  await app.listen(4000);
}
bootstrap().then(() => console.log('Server Started on Port: ' + 4000));
