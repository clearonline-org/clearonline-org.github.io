/**
* @Author: mars
* @Date:   2016-12-28T01:01:23-05:00
* @Last modified by:   mars
* @Last modified time: 2016-12-28T02:59:27-05:00
*/



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-component',
  templateUrl: './countdown-component.component.html',
  styleUrls: ['./countdown-component.component.css']
})
export class CountdownComponentComponent implements OnInit {
  endOfYear: Date;
  initializing: boolean = false;
  constructor() {
    this.initializing = true;

  }

  ngOnInit() {
    setInterval(() => {
      this._computeEndOfYearTime();
    }, 1000);
  }

  _computeEndOfYearTime() {

  this.endOfYear = new Date();
  this.endOfYear.setFullYear(2016);
  this.endOfYear.setMonth(11);
  this.endOfYear.setDate(31);
  this.endOfYear.setHours(23);
  this.endOfYear.setMinutes(59);
  this.endOfYear.setSeconds(59);

  // one second before end of 2016
  console.log(this.endOfYear);
  this.initializing = false;

}
}
