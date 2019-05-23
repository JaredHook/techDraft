export class TeamTable {
  teamName: string;
  score: number;

  constructor(teamName: string, score?: number) {
    this.teamName = teamName;
    this.score = score || 0;
  }
}
