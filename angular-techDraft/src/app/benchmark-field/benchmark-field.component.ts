import { Component, OnInit, Input } from '@angular/core';
import { UserScore } from '../benchmark/user-score';

@Component({
  selector: 'app-benchmark-field',
   template: `
  <div class="ui  right label input"  >
  <label for="amount" class="ui label">Name</label>
  <input type="text" placeholder="" id="name" [(ngModel)]="userScore.name" name="name" required #name="ngModel">
  <div class="ui  label">Points</div><div class="ui input">
    <input type="text" placeholder="" maxlength="3" size="3" [(ngModel)]="userScore.score" [value]="score" name="points" required #points="ngModel">
  </div>
</div>
<p *ngIf="!name.valid && name.touched">Please enter a name</p>
<p *ngIf="!points.valid && points.touched">Please enter your score</p> 
  `
})
export class BenchmarkFieldComponent implements OnInit {
  userScore = new UserScore();
  
  @Input() public score: number;

  constructor() { }

  ngOnInit() {
  }

}
