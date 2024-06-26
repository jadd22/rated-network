import { Injectable } from '@nestjs/common';
import { CreateOpertaorEffectivenessDto } from './dto/create-opertaor-effectiveness.dto';
import { UpdateOpertaorEffectivenessDto } from './dto/update-opertaor-effectiveness.dto';
import { OpertaorEffectiveness } from './entities/opertaor-effectiveness.entity';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DBAbstractService } from 'src/shared/db-abstract.service';
import { error } from 'console';
import { Observable, map } from 'rxjs';

@Injectable()
export class OpertaorEffectivenessService extends DBAbstractService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    @InjectRepository(OpertaorEffectiveness)
    private readonly opertaorEffectiveness: Repository<OpertaorEffectiveness>,
  ) {
    super(opertaorEffectiveness);
  }

  getOperatorEffectiveness(
    fromDate: string,
    granularity: string,
    filterType: string,
    size: number,
  ): Observable<any> {
    try {
      const reqHeaders = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.configService.get('API_KEY'),
        'X-Rated-Network': this.configService.get('NETWORK_NAME'),
      };

      const params = {
        from: fromDate,
        granularity: granularity,
        filterType: filterType,
        size: size,
      };

      console.log(`validatorPubKey :${this.configService.get('OPERATOR_1')}`);
      console.log(`params :${JSON.stringify(params)}`);
      const URL = `/operators/${this.configService.get('OPERATOR_1')}/effectiveness`;
      const result = this.httpService
        .get(this.configService.get('BASE_URL') + URL, {
          headers: reqHeaders,
          params: params,
        })
        .pipe(
          map(async (response) => {
            this.createOperatorEffectiveness(response.data.data);
            return response.data;
          }),
        );
      return result;
    } catch (error) {
      console.error(error.message);
    }
  }

  async createOperatorEffectiveness(
    opertaorEffectiveness: OpertaorEffectiveness[],
  ) {
    if (opertaorEffectiveness && opertaorEffectiveness.length > 0) {
      const newOperator = opertaorEffectiveness.map(({ id, ...rest }) => ({
        operatorId: id,
        ...rest,
      }));
      console.log(`opertaorEffectiveness: ${JSON.stringify(newOperator)}`);
      const result = await this.save(newOperator);
      if (!result) {
        throw new error(`Failed to store validator data: ${result}`);
      }
      return;
    }
  }
}
