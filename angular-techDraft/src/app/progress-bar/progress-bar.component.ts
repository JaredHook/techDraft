import { Component, OnInit, Input } from '@angular/core';
// import { BenchmarkComponent } from '../benchmark/benchmark.component';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() public percent: number;
  barWidth: string;
 

  constructor() { }

  ngOnInit() {

  //  this.barWidth = "50.%"  // this test works. The progress bar moves on page.
   // this.barWidth = this.percent.toString()+".%";
  }
}
