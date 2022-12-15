import { QatarworldcupService, QatarWorldCup } from './qatar-world-cup.service';
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
  constructor(private readonly QatarworldcupService: QatarworldcupService) {}

  @Get()
  getNumberOfNationalTeams(): QatarWorldCup[] {
    return this.QatarworldcupService.getNumberOfNationalTeams();
  }

  @Get('/search')
  search(@Query('group') searchingMatch: string) {
    return `I recommend you this legend match : ${searchingMatch}`;
  }

  @Get('/:name')
  getQuarterFinalTeams(@Param('name') matchNumber: string): QatarWorldCup {
    return this.QatarworldcupService.getQuarterFinalTeams(matchNumber);
  }

  @Post()
  create(@Body() matchData) {
    return this.QatarworldcupService.deserveParticipate(matchData);
  }

  @Delete('/:id')
  remove(@Param('id') matchNumber: string) {
    return this.QatarworldcupService.failLoseTeam(matchNumber);
  }

  @Patch('/:id')
  patch(@Param('id') matchNumber: string, @Body() newMatch) {
    return this.QatarworldcupService.playOff(matchNumber, newMatch);
  }
}
