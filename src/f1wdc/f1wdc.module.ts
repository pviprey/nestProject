import { MiddlewareConsumer, Module } from '@nestjs/common';
import { F1wdcController } from './f1wdc.controller';
import { F1wdcService } from './f1wdc.service';
import { ConfigurationModule } from 'configuration/configuration.module';
import { LoggerMiddleware } from 'src/logger/logger.middleware';

const options: Record<string, string> = {
  environment: 'development',
};

@Module({
  controllers: [F1wdcController],
  imports: [ConfigurationModule.register(options)],
  providers: [F1wdcService]
})
export class F1wdcModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(F1wdcController);
  }
}
