import { Module } from '@nestjs/common';
import { MotogpController } from './motogp.controller';
import { MotogpService } from './motogp.service';

@Module({
  controllers: [MotogpController],
  providers: [MotogpService]
})
export class MotogpModule {}
