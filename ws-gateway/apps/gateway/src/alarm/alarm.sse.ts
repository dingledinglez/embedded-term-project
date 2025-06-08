import { Controller, Sse } from '@nestjs/common';
import { fromEvent, map, Observable } from 'rxjs';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Controller('alarm')
export class AlarmSse {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  @Sse('get-cry-alerts')
  getAudioAlerts(): Observable<{ data: { type: string } }> {
    return fromEvent(this.eventEmitter, 'new-audio-alarm').pipe(
      map((_data: any) => ({ data: _data })),
    );
  }

  @Sse('get-alarms')
  getAlarms(): Observable<{ data: { type: string } }> {
    return fromEvent(this.eventEmitter, 'new-alarm').pipe(
      map((_data: string) => ({ data: { type: _data } })),
    );
  }
}
