import { Component, OnInit } from '@angular/core';

var url = "mongodb+srv://miljan123:miljan123@cluster0.9usha.mongodb.net/TimeTrackApp?retryWrites=true&w=majority";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
  
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loginUser(event) {
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    

    console.log(username, password)

    
}
}

