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

  private readonly audioDetectionUrl = 'http://127.0.0.1:3001/cry-detection';

  constructor(private readonly eventEmitter: EventEmitter2) {}

  @SubscribeMessage('cry')
  handleAudio(@MessageBody() data: { userId: number; wav: Buffer }) {
    const { userId, wav } = data;

    try {
      request.post(
        {
          url: this.audioDetectionUrl,
          formData: {
            file: {
              value: wav,
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

          const body = JSON.parse(http_response.body);

          switch (body['predicted_class']) {
            case '불편함':
              this.eventEmitter.emit('new-audio-alarm', {
                type: 'discomfort',
                data: body,
              });
              break;
            case '배고픔':
              this.eventEmitter.emit('new-audio-alarm', {
                type: 'hungry',
                data: body,
              });
              break;
            case '트림':
              this.eventEmitter.emit('new-audio-alarm', {
                type: 'trim',
                data: body,
              });
              break;
            case '복통':
              this.eventEmitter.emit('new-audio-alarm', {
                type: 'stomachache',
                data: body,
              });
              break;
            case '피로':
              this.eventEmitter.emit('new-audio-alarm', {
                type: 'tired',
                data: body,
              });
              break;
          }

          console.log(`오디오 처리 완료: ${userId}`);
        },
      );
    } catch (error) {
      console.error('오디오 처리 중 오류:', error);
    }
  }
}
