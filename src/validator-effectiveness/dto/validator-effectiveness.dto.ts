import { IsString, IsInt } from 'class-validator';

export class ValidatorEffectivenessDto {
    @IsString()
    readonly validatorPubKey: string;
  
    @IsString()
    readonly from: string;

    @IsString()
    readonly to: string;

    @IsString()
    readonly granularity: string;

    @IsString()
    readonly filterType: string;
  
    @IsInt()
    readonly size: number;
}
