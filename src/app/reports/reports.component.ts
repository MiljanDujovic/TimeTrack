import { Component, OnInit } from '@angular/core';
import { WeekDay } from '@angular/common';
import { timer } from 'rxjs';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  time = new Date();
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.time = new Date();
   }, 1000);
  }
  
  
  time1 = new Date();
  time2 = new Date(-1);
  
}
