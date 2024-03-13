import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from 'configuration/configuration.module';
import { LoggerMiddleware } from './logger/logger.middleware';
import { F1wdcModule } from './f1wdc/f1wdc.module';
import { F1wdcService } from './f1wdc/f1wdc.service';

const options: Record<string, string> = {
  environment: 'development',
};



@Module({
  controllers: [AppController],
  imports: [ConfigurationModule.register(F1wdcService.F1WCD), F1wdcModule],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(AppController);
  }
}
