import { PartialType } from '@nestjs/mapped-types';
import { CreateOpertaorEffectivenessDto } from './create-opertaor-effectiveness.dto';

export class UpdateOpertaorEffectivenessDto extends PartialType(CreateOpertaorEffectivenessDto) {}
