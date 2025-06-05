import { Injectable } from '@nestjs/common';
import httpClient from 'apps/domain/common/client/http-client';

@Injectable()
export class VideoService {
  private readonly poseDetectionUrl = 'http://localhost:8004/pose-detection';

  async processPng(pngData: Buffer) {
    return httpClient.request.post(this.poseDetectionUrl, pngData, {
      headers: { 'Content-Type': 'image/png' },
    });
  }
}
