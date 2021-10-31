import { BadRequestException, ValidationError, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    exceptionFactory: (error: ValidationError[]) => {
      const errors = error.map(m => Object.entries(m.constraints).map(values => values[1])).reduce((a, b) => a = [...a, ...b]);
      return new BadRequestException(errors.length > 0 ? errors[0] : 'Bad Request');
    }
  }));

  const config = new DocumentBuilder()
    .setTitle('Demo NestJS Traning')
    .setDescription('The Nestjs description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);

  await app.listen(3000);
}
bootstrap();
