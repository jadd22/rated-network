import { Module } from '@nestjs/common';
import { ValidatorEffectivenessService } from './validator-effectiveness.service';
import { ValidatorEffectivenessController } from './validator-effectiveness.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValidatorEffectiveness } from './entities/validator-effectiveness.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ValidatorEffectiveness]), HttpModule],
  controllers: [ValidatorEffectivenessController],
  providers: [ValidatorEffectivenessService],
  exports: [ValidatorEffectivenessService],
})
export class ValidatorEffectivenessModule {}
