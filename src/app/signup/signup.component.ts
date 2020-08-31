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
/*MongoClient.connect("mongodb+srv://miljan123:miljan123@cluster0.9usha.mongodb.net/TimeTrackApp?retryWrites=true&w=majority", function(err, db) {
  if (err) throw err;
  
  var dbo = db.db("TimeTrackApp");
  var TimeTrackApp = [
    { Id: 1, Email: 'admin', Password: 'admin'}, 
    { Id: 2, Email: 'Desanka', Password: 'sifra'},
    { Id: 3, Email: 'Nadezda', Password: 'sifra'},
    { Id: 4, Email: 'Milunka', Password: 'sifra'},
    
  ];
  dbo.collection("Users").insertMany(TimeTrackApp, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });

});
*/
