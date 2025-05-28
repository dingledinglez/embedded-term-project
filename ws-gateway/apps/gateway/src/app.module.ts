import { Module } from '@nestjs/common';
import { GatewayModule } from 'apps/gateway/src/gateway.module';
import { ApplicationLogger } from 'apps/domain/common/logger/application.logger';

@Module({
  imports: [GatewayModule],
  providers: [ApplicationLogger],
})
export class AppModule {}
