import { Module } from '@nestjs/common';
import { NetworkStatsService } from './network-stats.service';
import { NetworkStatsController } from './network-stats.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [NetworkStatsController],
  providers: [NetworkStatsService]
})
export class NetworkStatsModule {}
