import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { map, Observable } from 'rxjs';
import { DBAbstractService } from 'src/shared/db-abstract.service';
import { ValidatorEffectiveness } from './entities/validator-effectiveness.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { error } from 'console';
import { ValidatorEffectivenessDto } from './dto/validator-effectiveness.dto';
import { GET_DATE } from 'src/shared/common';

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
    validatorEffectivenessDto: ValidatorEffectivenessDto,
  ): Observable<any> {
    try {
      const reqHeaders = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.configService.get('API_KEY'),
        'X-Rated-Network': this.configService.get('NETWORK_NAME'),
      };

      const params = {
        from: validatorEffectivenessDto.from
          ? validatorEffectivenessDto.from
          : GET_DATE(0),
        granularity: validatorEffectivenessDto.granularity,
        filterType: validatorEffectivenessDto.filterType,
        size: validatorEffectivenessDto.size,
        to: validatorEffectivenessDto.to
          ? validatorEffectivenessDto
          : GET_DATE(0),
      };
      console.log(`params: ${JSON.stringify(params)}`);
      const URL = `/validators/${validatorEffectivenessDto.validatorId}/effectiveness`;
      const result = this.httpService
        .get(this.configService.get('BASE_URL') + URL, {
          headers: reqHeaders,
          params: params,
        })
        .pipe(
          map(async (response) => {
            this.createValidatorEffectiveness(response.data.data);
            return response.data;
          }),
        );

      return result;
    } catch (error) {
      console.error(error.message);
    }
  }

  async createValidatorEffectiveness(
    validatorEffectiveness: ValidatorEffectiveness[],
  ) {
    if (validatorEffectiveness && validatorEffectiveness.length > 0) {
      const result = await this.save(validatorEffectiveness);
      if (!result) {
        throw new error(`Failed to store validator data: ${result}`);
      }
      return;
    }
  }
}
