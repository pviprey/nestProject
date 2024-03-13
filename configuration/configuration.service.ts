import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigurationService {
    constructor(private options: Record<number, string>) {}     //Record ?

    getValue(key:number): string{
        return this.options[key];
    }

    getKeys(value:string): string[]{
        return Object.keys(this.options).filter(key => this.options[key] === value);
    }

    addValue(key:number, value:string): void{
        if(!this.options[key]){
            this.options[key] = value;
        }
    }
}
