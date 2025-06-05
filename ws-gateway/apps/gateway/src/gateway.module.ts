import { Module } from '@nestjs/common';
import { VideoGateway } from 'apps/gateway/src/video/video.gateway';
import { BullModule } from '@nestjs/bull';
import { EventEmitterModule } from '@nestjs/event-emitter';

const gateways = [VideoGateway];

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'ai-queue',
    }),
    EventEmitterModule.forRoot(),
  ],
  providers: [...gateways],
})
export class GatewayModule {}
