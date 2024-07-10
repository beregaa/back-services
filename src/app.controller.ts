import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('event/:event')
  getHello(@Param('event') eventname:string): string {
    return this.appService.getHello(eventname);

  }
}
