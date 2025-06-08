import { EventEmitter2 } from '@nestjs/event-emitter';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import * as request from 'request';

@WebSocketGateway({
  cors: { origin: '*' },
  namespace: 'audio',
})
export class AudioGateway {
  @WebSocketServer()
  server: Server;

  private readonly audioDetectionUrl = 'http://127.0.0.1:8000/cry-detection';

  constructor(private readonly eventEmitter: EventEmitter2) {}

  @SubscribeMessage('audio')
  handleAudio(@MessageBody() data: { userId: number; wav: Buffer }) {
    const { userId, wav } = data;

    try {
      request.post(
        {
          url: this.audioDetectionUrl,
          accept: 'application/json',
          formData: {
            audio: {
              value: Buffer.from(wav),
              options: {
                filename: 'file.wav', // filename
                contentType: 'audio/wav', // contentType
              },
            },
          },
        },
        (error, http_response) => {
          if (error) {
            console.error('PNG 처리 중 오류:', error);
            return;
          }

          console.log('HTTP 응답:', http_response.body);

          const body = JSON.parse(http_response.body);

          console.log(body['predicted_class']);

          console.log(`오디오 처리 완료: ${userId}`);
        },
      );
    } catch (error) {
      console.error('오디오 처리 중 오류:', error);
    }
  }
}
