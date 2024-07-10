import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(events: string): string {
    return `welcome to ${events}`;
  }
}
