import { QatarWorldCupService, QatarWorldCup } from './qatar-world-cup.service';
import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Body,
  Query,
} from '@nestjs/common';

@Controller('Qatar-world-cup')
export class QatarWorldCupController {
  constructor(private readonly QatarWorldCupService: QatarWorldCupService) {}

  @Get()
  getNumberOfNationalTeams(): QatarWorldCup[] {
    return this.QatarWorldCupService.getNumberOfNationalTeams();
  }

  @Get('/search')
  search(@Query('group') searchingMatch: string) {
    return `I recommend you this legend match : ${searchingMatch}`;
  }

  @Get('/:name')
  getQuarterFinalTeams(@Param('name') matchNumber: string): QatarWorldCup {
    return this.QatarWorldCupService.getQuarterFinalTeams(matchNumber);
  }

  @Post()
  create(@Body() matchData) {
    return this.QatarWorldCupService.deserveParticipate(matchData);
  }

  @Delete('/:id')
  remove(@Param('id') matchNumber: string) {
    return this.QatarWorldCupService.failLoseTeam(matchNumber);
  }

  @Patch('/:id')
  patch(@Param('id') matchNumber: string, @Body() newMatch) {
    return this.QatarWorldCupService.playOff(matchNumber, newMatch);
  }
}
