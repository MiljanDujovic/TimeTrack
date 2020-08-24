import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeekDay } from '@angular/common';
import { timer } from "rxjs";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  date = new Date();
  clock = new Date();
  time:any;
  isTicking: boolean = false;
  startText = 'CLOCKIN';
  numberOfClicks: number = 0;
  ngOnInit() {
    setInterval(() => {
       this.time = new Date();
    }, 1000);
}
  constructor() { }
  
  clockInButtonPressed (pressed) {
    
    this.numberOfClicks++;
    if (this.numberOfClicks%2 == 0) {
      this.isTicking = true;
      this.startText = 'CLOCKOUT';
      console.log(this.numberOfClicks);
    }
    
}
 
   

  
  
}
