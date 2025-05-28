import { Module } from '@nestjs/common';
import { ApplicationModule } from 'apps/application/application.module';

@Module({
  imports: [ApplicationModule],
  providers: [ApplicationModule],
})
export class GatewayModule {}
