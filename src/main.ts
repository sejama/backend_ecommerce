import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Ecommerce API Documentation')
    .setDescription('The eccomerce API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const HOST = process.env.HOST || 'localhost';
  const PORT = process.env.PORT || 3000

  await app.listen( PORT , () => 
  console.log(`Application is listening on http://${HOST}:${PORT}`));
}
bootstrap();
