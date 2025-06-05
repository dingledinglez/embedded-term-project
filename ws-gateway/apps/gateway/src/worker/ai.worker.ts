import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { Injectable } from '@nestjs/common';
import { Server } from 'socket.io';

@Processor('ai-queue')
@Injectable()
export class AiWorker {
  private readonly poseDetectionUrl = 'http://127.0.0.1:8000/pose-detection';
  private server: Server;

  constructor() {
    this.server = new Server({ cors: { origin: '*' } });
  }

  @Process('process-png')
  async handlePng(job: Job<{ userId: number; image: Buffer }>) {
    const { userId, image } = job.data;

    try {
      const response = await fetch(this.poseDetectionUrl, {
        method: 'POST',
        body: image,
        headers: { 'Content-Type': 'image/png' },
      });

      this.server
        .to(String(userId))
        .emit('pose-detection-result', response.body);
      console.log(`PNG 처리 완료: ${userId}`);
    } catch (error) {
      console.error('PNG 처리 중 오류:', error);
      this.server
        .to(String(userId))
        .emit('pose-detection-error', { message: '처리 실패' });
    }
  }
}
