import { Test, TestingModule } from '@nestjs/testing';
import { ValidatorEffectivenessService } from './validator-effectiveness.service';

describe('ValidatorEffectivenessService', () => {
  let service: ValidatorEffectivenessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ValidatorEffectivenessService],
    }).compile();

    service = module.get<ValidatorEffectivenessService>(ValidatorEffectivenessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
