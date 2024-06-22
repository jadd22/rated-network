import { Controller, Get, Param, Query } from '@nestjs/common';
import { ValidatorEffectivenessService } from './validator-effectiveness.service';
import { Observable } from 'rxjs';
import { ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { FILTER_TYPE, GRANULARITY_TYPE, VALIDATOR_ID } from 'src/shared/common';
import { ValidatorEffectivenessDto } from './dto/validator-effectiveness.dto';

@Controller('validatoreffectiveness')
export class ValidatorEffectivenessController {
  constructor(
    private readonly validatorEffectivenessService: ValidatorEffectivenessService,
  ) {}

  @Get()
  @ApiOperation({
    summary: 'Get users with optional filters from external API',
  })
  @ApiQuery({
    name: 'validatorId',
    required: true,
    description: 'Public key of validator',
    type: String,
    enum: VALIDATOR_ID,
    example: VALIDATOR_ID.ONE,
  })
  @ApiQuery({
    name: 'from',
    required: false,
    description: 'Filter users by from date',
    type: String,
  })
  @ApiQuery({
    name: 'to',
    required: false,
    description: 'Filter users by from date',
    type: String,
  })
  @ApiQuery({
    name: 'filterType',
    required: false,
    description: 'Filter result by specific type',
    enum: FILTER_TYPE,
    example: FILTER_TYPE.datetime,
  })
  @ApiQuery({
    name: 'granularity',
    required: false,
    description: 'Granularity of result by day, week, month',
    type: String,
    enum: GRANULARITY_TYPE,
    example: GRANULARITY_TYPE.day,
  })
  @ApiQuery({
    name: 'size',
    required: false,
    description: 'Size of result',
    type: Number,
  })
  getValidtorEffectiveness(
    @Query() validatorEffectivenessDto: ValidatorEffectivenessDto,
  ): Observable<any> {
    return this.validatorEffectivenessService.getValidtorEffectiveness(
      validatorEffectivenessDto,
    );
  }
}
