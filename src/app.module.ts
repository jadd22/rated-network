import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NetworkStatsModule } from './network-stats/network-stats.module';
import { ConfigModule } from '@nestjs/config';
import { ValidatorEffectivenessModule } from './validator-effectiveness/validator-effectiveness.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '65.0.184.98',
      port: 5432,
      password: 'admin',
      username: 'postgres',
      database: 'postgres',
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
    }),
    NetworkStatsModule,
    ValidatorEffectivenessModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
