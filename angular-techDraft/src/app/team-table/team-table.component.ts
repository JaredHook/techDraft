import { Component, OnInit } from '@angular/core';
import { TeamTable } from './team-table.model';

@Component({
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  styleUrls: ['./team-table.component.css']
})
export class TeamTableComponent implements OnInit {
  teamtables: TeamTable[];
  constructor() {
    this.teamtables = [
      new TeamTable('Angular Gods', 300),
      new TeamTable('Fullstackers', 5),
      new TeamTable('Angular Homeboys', 1),
      new TeamTable('Codebreakers', 1000),
    ];
  }

  sortedTeamTables(): TeamTable[] {
    return this.teamtables.sort((a: TeamTable, b: TeamTable) => b.score - a.score);
  }

  ngOnInit() {
  }
}
