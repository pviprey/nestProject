import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigurationService {
    constructor(private options: Record<string, string>) {}     //Record ?

    getValue(key:string): string{
        return this.options[key];
    }
}
