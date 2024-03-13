import { DynamicModule, Module } from '@nestjs/common';
import { ConfigurationService } from './configuration.service';

@Module({})
export class ConfigurationModule {
    static register(options: Record<number, string>): DynamicModule {
        return {
            module: ConfigurationModule,
            providers: [
                {
                    provide: ConfigurationService,
                    useValue: new ConfigurationService(options),
                },
            ],
            exports: [ConfigurationService]
        }
    }
}
