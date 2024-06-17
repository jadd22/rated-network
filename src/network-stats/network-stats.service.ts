import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map, Observable } from 'rxjs';

@Injectable()
export class NetworkStatsService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {}

   getStatus(): Observable<any> {
    try {
      const reqHeaders = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.configService.get("API_KEY"),
        'X-Rated-Network': this.configService.get("NETWORK_NAME"),
      };
      const result =  this.httpService.get(this.configService.get("BASE_URL") + '/network/stats', {
        headers: reqHeaders
      }).pipe(
        map(response => response.data)
      )
      return result;
    } catch (error) {
      console.error(error.message);
    }
  }
}
