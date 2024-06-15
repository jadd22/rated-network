import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NetworkStatsModule } from './network-stats/network-stats.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    NetworkStatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
