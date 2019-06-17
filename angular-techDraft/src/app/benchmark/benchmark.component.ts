import { Component, OnInit, ViewChild, Input, ElementRef, ViewChildren, QueryList, Output, EventEmitter } from '@angular/core';
import { BenchmarkFieldComponent } from '../benchmark-field/benchmark-field.component';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { NgForm, FormsModule, ReactiveFormsModule, FormArray, FormGroup } from '@angular/forms';
import { UserScore } from '../benchmark/user-score';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-benchmark',
   templateUrl: './benchmark.component.html',
  styleUrls: ['./benchmark.component.css']
})
export class BenchmarkComponent implements OnInit {
  fields: Array<any> 
  @ViewChildren(BenchmarkFieldComponent) benchmarkFields !: QueryList<BenchmarkFieldComponent>;
  percent: number = 0;

  constructor() { 
    this.fields = [`<app-benchmark-field></app-benchmark-field>`];
  }

  ngOnInit() {
    
  }

  onSubmit(form: ElementRef) {
    let arr: Array<number> = []
    let avg: number
    let sum: number = 0;
    let percentage: number = 100;

    this.benchmarkFields.toArray().forEach(function (el, index) {
       arr.push(el.userScore.score)

    })

    arr = arr.map(Number);
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]
    }

    avg = sum / arr.length
    this.percent = avg  // (avg / sum)  * percentage
   // console.log(this.percent)  // used to printout percentage works okay.
  } 

  addField() {
    this.fields.push(`<app-benchmark-field></app-benchmark-field>`)
  }
 
}
