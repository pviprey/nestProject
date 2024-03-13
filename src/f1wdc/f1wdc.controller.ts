import { Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { F1wdcService } from './f1wdc.service';


@Controller('f1wdc')
export class F1wdcController {
    constructor(private readonly F1wdcService: F1wdcService) {}

    //example get request: localhost:3000/f1wdc/champion
    @Get('/champions')
    getF1WCDChampions(): Record<number, string> {
      return this.F1wdcService.getAll();
    }

    //example post request: localhost:3000/f1wdc/champion/1977
    @Post('/champion/:year')
    postF1WCD(@Param('year', ParseIntPipe) year: number): string {
      return this.F1wdcService.getF1WCD(year);
    }

    @Put('/add/:key/:value')
    addValue(@Param('key', ParseIntPipe) key: number, @Param('value') value: string): void {
      this.F1wdcService.addValue(key, value);
    }
}
