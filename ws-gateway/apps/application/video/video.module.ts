import { Module } from '@nestjs/common';
import { VideoService } from 'apps/application/video/video.service';

@Module({
  providers: [VideoService],
  exports: [VideoService],
})
export class VideoModule {}
