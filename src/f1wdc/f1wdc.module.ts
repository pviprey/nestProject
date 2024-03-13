import { DynamicModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { F1wdcController } from './f1wdc.controller';
import { F1wdcService } from './f1wdc.service';
import { LoggerMiddleware } from 'src/logger/logger.middleware';

@Module({})
export class F1wdcModule {
  static register(options: Record<number, string>): DynamicModule {
    return {
      module: F1wdcModule,
      controllers: [F1wdcController],
      providers: [
        {
          provide: F1wdcService,
          useValue: new F1wdcService(options),
        },
      ],
    };
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(F1wdcController);
  }
}
