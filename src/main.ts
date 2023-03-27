import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({}));
  
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Backend Ecommerce Documentation')
    .setDescription('Un backend ecommerce')
    .setVersion('1.0')
    .addTag('Home')
    .addBearerAuth(undefined, 'defaultBearerAuth')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  const HOST = process.env.HOST || 'localhost';
  const PORT = process.env.PORT || 3000

  await app.listen( PORT , () => 
  console.log(`Application is listening on http://${HOST}:${PORT}`));
}
bootstrap();
