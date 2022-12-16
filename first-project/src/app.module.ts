import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QatarWorldCupService } from './qatarWorldCup/qatar-world-cup.service';
import { QatarWorldCupController } from './qatarWorldCup/qatar-world-cup.controller';

@Module({
  imports: [],
  controllers: [AppController, QatarWorldCupController],
  providers: [AppService, QatarWorldCupService],
})
export class AppModule {}
