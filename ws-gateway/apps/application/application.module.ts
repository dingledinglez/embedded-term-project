import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { ApplicationLogger } from 'apps/domain/common/logger/application.logger';
import { VideoModule } from 'apps/application/video/video.module';

const modules = [VideoModule];

@Module({
  imports: [...modules, ConfigModule.forRoot({ isGlobal: true })],
  providers: [ApplicationLogger],
  exports: [...modules, ApplicationLogger],
})
export class ApplicationModule {}

