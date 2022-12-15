import { QatarworldcupService } from './qatar-world-cup/qatar-world-cup.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QatarWorldCupController } from './qatar-world-cup/quatar-world-cup.controller';

@Module({
  imports: [],
  controllers: [AppController, QatarWorldCupController],
  providers: [AppService, QatarworldcupService],
})
export class AppModule {}
