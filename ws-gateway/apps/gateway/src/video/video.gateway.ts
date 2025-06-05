import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { VideoService } from 'apps/application/video/video.service';

@WebSocketGateway({
  cors: { origin: '*' },
  namespace: 'video',
})
export class VideoGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly videoService: VideoService) {}

  @SubscribeMessage('video-stream')
  handleVideoStream(@MessageBody() data: { userId: number; video: Buffer }) {
    this.server.socketsJoin(String(data.userId));
    return this.server.to(String(data.userId)).emit('video-stream', data.video);
  }

  @SubscribeMessage('png')
  async handlePngUpload(
    @MessageBody() data: { userId: number; image: Buffer },
  ) {
    console.log(`Processing PNG upload for user: ${data.userId}`);
    const response = await this.videoService.processPng(data.image);
    this.server
      .to(String(data.userId))
      .emit('pose-detection-response', response.data);
  }
}
