import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@WebSocketGateway({
  cors: { origin: '*' },
  namespace: 'video',
})
export class VideoGateway {
  @WebSocketServer()
  server: Server;

  constructor(@InjectQueue('ai-queue') private aiQueue: Queue) {}

  @SubscribeMessage('video-stream')
  handleVideoStream(@MessageBody() data: { userId: number; video: Buffer }) {
    this.server.socketsJoin(String(data.userId));
    return this.server.to(String(data.userId)).emit('video-stream', data.video);
  }

  @SubscribeMessage('png')
  handlePngUpload(@MessageBody() data: { userId: number; image: Buffer }) {
    try {
      this.aiQueue.add('process-png', data);
    } catch (error) {
      console.error('PNG 작업 추가 중 오류:', error);
      this.server
        .to(String(data.userId))
        .emit('pose-detection-error', { message: '작업 추가 실패' });
    }
  }
}
