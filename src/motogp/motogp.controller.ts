import { Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { MotogpService } from './motogp.service';


@Controller('motogp')
export class MotogpController {

    constructor(private readonly motogpService: MotogpService) {}

    @Get('/champions')
    getMotoGPChampions(): Record<number, string> {
      return this.motogpService.getAll();
    }

    @Post('/champion/:year')
    postMotoGP(@Param('year', ParseIntPipe) year: number): string {
      return this.motogpService.getMotoGPChampion(year);
    }
}
