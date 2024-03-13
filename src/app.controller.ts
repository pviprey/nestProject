import { ConfigurationService } from './../configuration/configuration.service';
import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private ConfigurationService: ConfigurationService) {}

  //example get request: localhost:3000/
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //example get request: localhost:3000/mbappe
  @Get('/mbappe')
  getMbappe(): string {
    return this.appService.getMbappe();
  }

  //example get request: localhost:3000/ooc
  @Get('/ooc')
  getOocRandom(): string {
    return this.getOOC(Math.floor(Math.random() * this.appService.OOC.length));
  }

  //example get request: localhost:3000/ooc/1
  @Get('/ooc/:index')
  getOOC(@Param('index', ParseIntPipe) index: number): string {
    return this.appService.getOOC(index % this.appService.OOC.length);
  }
}
