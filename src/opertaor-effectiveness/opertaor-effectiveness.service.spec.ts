import { Test, TestingModule } from '@nestjs/testing';
import { OpertaorEffectivenessService } from './opertaor-effectiveness.service';

describe('OpertaorEffectivenessService', () => {
  let service: OpertaorEffectivenessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpertaorEffectivenessService],
    }).compile();

    service = module.get<OpertaorEffectivenessService>(OpertaorEffectivenessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
