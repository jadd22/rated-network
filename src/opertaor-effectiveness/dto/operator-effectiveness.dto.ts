import { IsString, IsInt, IsOptional } from 'class-validator';

export class OperatorEffectivenessDto {
  @IsString()
  readonly operatorId: string;

  @IsOptional()
  @IsString()
  readonly from?: string;

  @IsOptional()
  @IsString()
  readonly to?: string;

  @IsString()
  readonly granularity: string;

  @IsString()
  readonly filterType: string;

  @IsOptional()
  @IsInt()
  readonly size: number;
}
