import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { APPLICATION, ENV, VERSION, PORT } from './config/env';
import { AppModule } from './infra/http/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle(`${APPLICATION}`)
    .setDescription(`Env: ${ENV} - Event App Nestjs - Demo`)
    .setVersion(`${VERSION}`)
    .setContact('Flp Costa', 'https://devscape.com.br', 'flp.costas@gmail.com')
    .setLicense(
      'Copyright (c) 2023, DEVSCAPE, Licença de software proprietario.',
      'https://devscape.com.br',
    )
    .setExternalDoc('Open Api: swagger-ui-json', '/swagger-ui-json')
    .build();

  const options: SwaggerDocumentOptions = {
    deepScanRoutes: true,
  };

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('swagger-ui', app, document);

  app.enableCors();
  await app.listen(PORT || 3000);
  console.log(`🔥 ${ENV}: ${APPLICATION} listening on port ${PORT}!`);
}
bootstrap();
