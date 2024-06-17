import { Controller, Get, Param, Query } from '@nestjs/common';
import { ValidatorEffectivenessService } from './validator-effectiveness.service';
import { Observable } from 'rxjs';
import { ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';

@Controller('validatoreffectiveness')
export class ValidatorEffectivenessController {
  constructor(
    private readonly validatorEffectivenessService: ValidatorEffectivenessService,
  ) {}

  @Get()
  @ApiOperation({
    summary: 'Get users with optional filters from external API',
  })
  // @ApiParam({
  //   name: 'validtorPubKey',
  //   required: true,
  //   description: 'Validtor Public Key',
  //   type: String,
  // })
  @ApiQuery({
    name: 'from',
    required: false,
    description: 'Filter users by from date',
    type: String,
  })
  @ApiQuery({
    name: 'filterType',
    required: false,
    description: 'Filter result by specific type',
    type: String,
  })
  @ApiQuery({
    name: 'granularity',
    required: false,
    description: 'Granularity of result by day, week, month',
    type: String,
  })
  @ApiQuery({
    name: 'size',
    required: false,
    description: 'Size of result',
    type: Number,
  })
  getValidtorEffectiveness(
    @Query('from') from: string,
    @Query('filterType') filterType: string,
    @Query('granularity') granularity: string,
    @Query('size') size: number,
  ): Observable<any> {
    return this.validatorEffectivenessService.getValidtorEffectiveness(
      from,
      granularity,
      filterType,
      size,
    );
  }
}
