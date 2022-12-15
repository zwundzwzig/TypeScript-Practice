import { Injectable, NotFoundException } from '@nestjs/common';

export class QatarWorldCup {
  name: string;
  rank: number;
  captain: string[];
  group: string;
}

@Injectable()
export class QatarworldcupService {
  private matches: QatarWorldCup[] = [];

  getNumberOfNationalTeams(): QatarWorldCup[] {
    return this.matches;
  }

  getQuarterFinalTeams(name: string): QatarWorldCup {
    const match = this.matches.find((match) => match.name === name);
    if (!match) {
      throw new NotFoundException(`Match with ${name} not found!`);
    }
    return match;
  }

  failLoseTeam(name: string) {
    this.getQuarterFinalTeams(name);
    this.matches = this.matches.filter((match) => match.name !== name);
  }

  deserveParticipate(rank) {
    this.matches.push({
      rank: this.matches.length,
      ...rank,
    });
  }

  playOff(name: string, lastPart) {
    const match = this.getQuarterFinalTeams(name);
    this.failLoseTeam(name);
    this.matches.push({
      ...match,
      ...lastPart,
    });
  }
}
