import { Test, TestingModule } from '@nestjs/testing';
import { MotogpController } from './motogp.controller';

describe('MotogpController', () => {
  let controller: MotogpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MotogpController],
    }).compile();

    controller = module.get<MotogpController>(MotogpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
