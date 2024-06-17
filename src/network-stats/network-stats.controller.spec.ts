import { Test, TestingModule } from '@nestjs/testing';
import { NetworkStatsController } from './network-stats.controller';
import { NetworkStatsService } from './network-stats.service';

describe('NetworkStatsController', () => {
  let controller: NetworkStatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NetworkStatsController],
      providers: [NetworkStatsService],
    }).compile();

    controller = module.get<NetworkStatsController>(NetworkStatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
