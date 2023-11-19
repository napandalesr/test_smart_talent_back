import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: process.env.ALLOW_CORS_ORIGIN,
      methods: process.env.ALLOW_CORS_METHODS,
      preflightContinue: false,
      optionsSuccessStatus: 204,
    },
  });

  const config = new DocumentBuilder()
    .setTitle('Test smart talent')
    .setDescription(
      'Api test smart talent',
    )
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
