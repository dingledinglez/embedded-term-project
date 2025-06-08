import { IoAdapter } from '@nestjs/platform-socket.io';
import { Injectable } from '@nestjs/common';
import { ServerOptions } from 'socket.io';

@Injectable()
export class CustomIoAdapter extends IoAdapter {
  createIOServer(port: number, options?: ServerOptions): any {
    const serverOptions: ServerOptions = {
      ...options,
      maxHttpBufferSize: 1e8, // 100MB
    };
    const server = super.createIOServer(port, serverOptions);
    return server;
  }
}
