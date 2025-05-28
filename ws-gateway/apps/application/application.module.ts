import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { ApplicationLogger } from 'apps/domain/common/logger/application.logger';

const modules = [];

@Module({
  imports: [...modules, ConfigModule.forRoot({ isGlobal: true })],
  providers: [ApplicationLogger],
  exports: [...modules, ApplicationLogger],
})
export class ApplicationModule {}
