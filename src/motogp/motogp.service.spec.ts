import { Test, TestingModule } from '@nestjs/testing';
import { MotogpService } from './motogp.service';

describe('MotogpService', () => {
  let service: MotogpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MotogpService],
    }).compile();

    service = module.get<MotogpService>(MotogpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
