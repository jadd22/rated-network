import { Controller, Get, Query } from '@nestjs/common';
import { OpertaorEffectivenessService } from './opertaor-effectiveness.service';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { OperatorEffectivenessDto } from './dto/operator-effectiveness.dto';
import {
  FILTER_TYPE,
  GRANULARITY_TYPE,
  OPERATOR_NAME,
} from 'src/shared/common';

@Controller('opertaor-effectiveness')
export class OpertaorEffectivenessController {
  constructor(
    private readonly opertaorEffectivenessService: OpertaorEffectivenessService,
  ) {}

  @Get()
  @ApiOperation({
    summary: 'Get users with optional filters from external API',
  })
  @ApiQuery({
    name: 'operatorId',
    required: true,
    description: 'Operator Unique Name',
    type: String,
    enum: OPERATOR_NAME,
    example: OPERATOR_NAME.Kiln,
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
    @Query() operatorEffectivenessDto: OperatorEffectivenessDto,
  ): Observable<any> {
    return this.opertaorEffectivenessService.getOperatorEffectiveness(
      operatorEffectivenessDto,
    );
  }
}
