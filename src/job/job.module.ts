import { Module } from '@nestjs/common';
import { JobService } from './job.service';
import { ValidatorEffectivenessService } from 'src/validator-effectiveness/validator-effectiveness.service';
import { HttpService } from '@nestjs/axios';
import { ValidatorEffectivenessModule } from 'src/validator-effectiveness/validator-effectiveness.module';

@Module({
  imports: [ValidatorEffectivenessModule],
  providers: [JobService],
})
export class JobModule {}
