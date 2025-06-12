import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { Injectable } from '@nestjs/common';
import { Server } from 'socket.io';
import * as request from 'request';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Processor('ai-queue')
@Injectable()
export class AiWorker {
  private readonly poseDetectionUrl = 'http://127.0.0.1:3001/pose-detection';
  private server: Server;

  constructor(private readonly eventEmitter: EventEmitter2) {
    this.server = new Server({ cors: { origin: '*' } });
  }

  @Process('process-png')
  async handlePng(job: Job<{ userId: number; image: Buffer }>) {
    const { userId, image } = job.data;

    try {
      request.post(
        {
          url: this.poseDetectionUrl,
          formData: {
            image: {
              value: Buffer.from(image), // Give your node.js buffer to here
              options: {
                filename: 'image.png', // filename
                contentType: 'image/png', // contentType
              },
            },
          },
        },
        (error, http_response) => {
          if (error) {
            console.error('PNG 처리 중 오류:', error);
            this.server
              .to(String(userId))
              .emit('pose-detection-error', { message: '처리 실패' });
            return;
          }

          console.log('HTTP 응답:', http_response.body);

          const body = JSON.parse(http_response.body);

          if (body.hasOwnProperty('risk')) {
            this.eventEmitter.emit('new-alarm', 'risk');
          }

          if (
            body['prone_status'] === 'Detected' &&
            body['choking_status'] >= 90
          ) {
            this.eventEmitter.emit('new-alarm', 'chocking');
          }

          console.log(`PNG 처리 완료: ${userId}`);
        },
      );
    } catch (error) {
      console.error('PNG 처리 중 오류:', error);
      this.server
        .to(String(userId))
        .emit('pose-detection-error', { message: '처리 실패' });
    }
  }
}
