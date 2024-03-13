import { Test, TestingModule } from '@nestjs/testing';
import { F1wdcService } from './f1wdc.service';

describe('F1wdcService', () => {
  let service: F1wdcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [F1wdcService],
    }).compile();

    service = module.get<F1wdcService>(F1wdcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
