import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { from, map, Observable, switchMap } from 'rxjs';
import { DBAbstractService } from 'src/shared/db-abstract.service';
import { ValidatorEffectiveness } from './entities/validator-effectiveness.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AxiosResponse } from 'axios';
import { error } from 'console';

@Injectable()
export class ValidatorEffectivenessService extends DBAbstractService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    @InjectRepository(ValidatorEffectiveness)
    private readonly validatorEffectivenessRepo: Repository<ValidatorEffectiveness>,
  ) {
    super(validatorEffectivenessRepo);
  }

  getValidtorEffectiveness(
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

      console.log(`validatorPubKey :${this.configService.get('VALIDATOR_1')}`);
      console.log(`params :${JSON.stringify(params)}`);
      const URL = `/validators/${this.configService.get('VALIDATOR_1')}/effectiveness`;
      const result = this.httpService
        .get(this.configService.get('BASE_URL') + URL, {
          headers: reqHeaders,
          params: params,
        })
        .pipe(
          map(async (response) => {
            this.createValidatorEffectiveness(response.data.data);
            return;
          }),
        );
    } catch (error) {
      console.error(error.message);
    }
  }

  async createValidatorEffectiveness(
    validatorEffectiveness: ValidatorEffectiveness[],
  ) {
    if (validatorEffectiveness && validatorEffectiveness.length > 0) {
      console.log(`validatorEffectiveness: ${validatorEffectiveness}`);
      const result = await this.save(validatorEffectiveness);
      if (!result) {
        throw new error(`Failed to store validator data: ${result}`);
      }
      return;
    }
  }
}
