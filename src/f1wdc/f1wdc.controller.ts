import { ConfigurationService } from 'configuration/configuration.service';
import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { F1wdcService } from './f1wdc.service';


@Controller('f1wdc')
export class F1wdcController {
    constructor(private readonly F1wdcService: F1wdcService, private ConfigurationService: ConfigurationService) {}

    //example post request: localhost:3000/f1wdc/champion/1977
    @Post('/champion/:year')
    getF1WCD(@Param('year', ParseIntPipe) year: number): string {
      return this.F1wdcService.getF1WCD(year);
    }
}
