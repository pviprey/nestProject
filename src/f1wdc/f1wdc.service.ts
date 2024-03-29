import { Injectable } from '@nestjs/common';

@Injectable()
export class F1wdcService {

    constructor(private championship: Record<number, string>){}
    
    getF1WCD(year: number): string {
        if(!this.championship[year]){
          return "Aucun championnat cette année là.";
        }
    
        return this.championship[year];
    }

    getAll(): Record<number, string>{
        return this.championship;
    }

    addValue(key:number, value:string): void{
        if(!this.championship[key]){
            this.championship[key] = value;
        }
    }
}
