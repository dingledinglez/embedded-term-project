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
})
export class VideoGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly videoService: VideoService) {}

  @SubscribeMessage('video')
  handleVideoStream(
    @MessageBody() { userId, data }: { userId: string; data: Buffer },
  ): void {
    console.log(`Streaming video for user: ${userId}`);
    this.server.to(userId).emit('video', data);
  }

  @SubscribeMessage('png')
  async handlePngUpload(
    @MessageBody() { userId, data }: { userId: string; data: Buffer },
  ): Promise<void> {
    console.log(`Processing PNG upload for user: ${userId}`);
    const response = await this.videoService.processPng(data);
    this.server.to(userId).emit('pose-detection-response', response.data);
  }
}
