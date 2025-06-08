import { Module } from '@nestjs/common';
import { VideoGateway } from 'apps/gateway/src/video/video.gateway';
import { BullModule } from '@nestjs/bull';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AudioGateway } from 'apps/gateway/src/audio/audio.gateway';
import { AlarmSse } from 'apps/gateway/src/alarm/alarm.sse';

const gateways = [VideoGateway, AudioGateway];

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
  controllers: [AlarmSse],
})
export class GatewayModule {}
