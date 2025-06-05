import { Module } from '@nestjs/common';
import { ApplicationModule } from 'apps/application/application.module';
import { VideoGateway } from 'apps/gateway/src/video/video.gateway';

const gateways = [VideoGateway];

@Module({
  imports: [ApplicationModule],
  providers: [ApplicationModule, ...gateways],
})
export class GatewayModule {}
