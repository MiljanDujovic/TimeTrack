import { Component, OnInit } from '@angular/core';
import {MongoClient} from 'mongodb';
import { from } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  
  constructor() { 
    
  }

  ngOnInit(): void {
  }
    registerUser(event) {
      const errors = [];
      event.preventDefault()
      const target = event.target
      const fullname = target.querySelector('#fullname').value
      const username = target.querySelector('#username').value
      const password = target.querySelector('#password').value
    
      console.log(fullname, username, password)
  }
  
}
