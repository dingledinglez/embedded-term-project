import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { json, urlencoded } from 'body-parser';
import { ApplicationLogger } from 'apps/domain/common/logger/application.logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.use(json({ limit: '100mb' }));
  app.use(urlencoded({ limit: '100mb', extended: true }));

  app.useLogger(new ApplicationLogger());

  await app.listen(process.env.API_PORT || 3001);
}
bootstrap();
