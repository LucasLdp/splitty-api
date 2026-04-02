import { cleanupOpenApiDoc } from 'nestjs-zod';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import z from 'zod';

async function bootstrap() {
  z.config(z.locales.pt());

  const app = await NestFactory.create(AppModule);

  const openApiDoc = SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle('Example API')
      .setDescription('Example API description')
      .setVersion('1.0')
      .build(),
  );

  SwaggerModule.setup('api', app, cleanupOpenApiDoc(openApiDoc));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap()
  .then(() => {
    console.log('Server is running on port', process.env.PORT ?? 3000);
  })
  .catch((err) => {
    console.error(err);
  });
