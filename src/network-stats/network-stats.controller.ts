import { Controller, Get } from '@nestjs/common';
import { NetworkStatsService } from './network-stats.service';
import { Observable } from 'rxjs';

@Controller('network-stats')
export class NetworkStatsController {
  constructor(private readonly networkStatsService: NetworkStatsService) {}

  @Get()
   getStatus(): Observable<any> {
    return this.networkStatsService.getStatus();
  }
}
