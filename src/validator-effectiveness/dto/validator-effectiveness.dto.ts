import { IsString, IsInt, IsOptional } from 'class-validator';

export class ValidatorEffectivenessDto {
  @IsString()
  validatorId: string;

  @IsOptional()
  @IsString()
  from?: string;

  @IsOptional()
  @IsString()
  to?: string;

  @IsString()
  granularity: string;

  @IsString()
  filterType: string;

  @IsOptional()
  @IsInt()
  size: number;
}
