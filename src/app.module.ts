import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NetworkStatsModule } from './network-stats/network-stats.module';
import { ConfigModule } from '@nestjs/config';
import { ValidatorEffectivenessModule } from './validator-effectiveness/validator-effectiveness.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OpertaorEffectivenessModule } from './opertaor-effectiveness/opertaor-effectiveness.module';
import { DatabaseModule } from './database/database.module';
import { ScheduleModule } from '@nestjs/schedule';
import { JobModule } from './job/job.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    ScheduleModule.forRoot(),
    NetworkStatsModule,
    ValidatorEffectivenessModule,
    OpertaorEffectivenessModule,
    DatabaseModule,
    JobModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
