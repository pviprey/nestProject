import { ConfigurationService } from './../configuration/configuration.service';
import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private ConfigurationService: ConfigurationService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/mbappe')
  getMbappe(): string {
    return this.appService.getMbappe();
  }

  @Get('/ooc')
  getOocRandom(): string {
    return this.getOOC(Math.floor(Math.random() * this.appService.OOC.length));
  }

  @Get('/ooc/:index')
  getOOC(@Param('index', ParseIntPipe) index: number): string {
    return this.appService.getOOC(index % this.appService.OOC.length);
  }
}
