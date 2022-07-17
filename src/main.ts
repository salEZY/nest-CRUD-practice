import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 8080
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())

  // register global middleware here
  // app.use(cors(), helmet(), morgan()) - EXAMPLE

  await app.listen(PORT);
  console.log(`API Server started on port ${PORT}`)
  console.log(`Database ${process.env.DB_NAME} started on port ${process.env.DB_PORT}`)
}
bootstrap();
