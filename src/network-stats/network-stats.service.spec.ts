import { Test, TestingModule } from '@nestjs/testing';
import { NetworkStatsService } from './network-stats.service';

describe('NetworkStatsService', () => {
  let service: NetworkStatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NetworkStatsService],
    }).compile();

    service = module.get<NetworkStatsService>(NetworkStatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
