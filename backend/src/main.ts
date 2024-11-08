import {  config }  from 'dotenv'
config()
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  
  app.useGlobalPipes(new ValidationPipe({
    transform: true,         // Automatically transform payloads to DTO instances
    whitelist: true,         // Strip properties that are not in the DTO
    forbidNonWhitelisted: true, // Throw an error for non-whitelisted properties
    stopAtFirstError: true   // Stop at the first validation error
  }));
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();