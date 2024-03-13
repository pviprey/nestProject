import { Test, TestingModule } from '@nestjs/testing';
import { F1wdcController } from './f1wdc.controller';

describe('F1wdcController', () => {
  let controller: F1wdcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [F1wdcController],
    }).compile();

    controller = module.get<F1wdcController>(F1wdcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
