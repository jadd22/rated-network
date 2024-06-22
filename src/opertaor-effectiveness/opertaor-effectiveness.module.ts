import { Module } from '@nestjs/common';
import { OpertaorEffectivenessService } from './opertaor-effectiveness.service';
import { OpertaorEffectivenessController } from './opertaor-effectiveness.controller';
import { OpertaorEffectiveness } from './entities/opertaor-effectiveness.entity';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([OpertaorEffectiveness]), HttpModule],
  controllers: [OpertaorEffectivenessController],
  providers: [OpertaorEffectivenessService],
})
export class OpertaorEffectivenessModule {}
