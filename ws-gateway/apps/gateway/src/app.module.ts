import { Module } from '@nestjs/common';
import { GatewayModule } from 'apps/gateway/src/gateway.module';
import { ApplicationLogger } from 'apps/domain/common/logger/application.logger';
import { AiWorker } from 'apps/gateway/src/worker/ai.worker';

@Module({
  imports: [GatewayModule],
  providers: [ApplicationLogger, AiWorker],
})
export class AppModule {}
