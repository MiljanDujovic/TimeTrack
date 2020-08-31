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
  startText: string;
  
  numberOfClicks: number = 0;
  ngOnInit() {
    setInterval(() => {
       this.time = new Date();
    }, 1000);
    this.startText = 'CLOCK IN'
}
  constructor() { }
  
  clockInButtonPressed () {
    event.preventDefault()
    console.log("IDE GASSSSSSSSSSSSSSSSSS")
    this.numberOfClicks++;
    
    if(this.numberOfClicks%2 !=0){
    
      
      this.isTicking = true;
      this.startText = 'CLOCK OUT';
      console.log(this.numberOfClicks);
    }
    else {
      this.isTicking = false;
      this.startText = 'CLOCK IN';
      
    }
  
}
 
   

  
  
}
