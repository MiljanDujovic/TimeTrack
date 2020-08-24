import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { from } from 'rxjs';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ReportsComponent } from './reports/reports.component';
import { ClockComponent } from './clock/clock.component'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ReportsComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([ 
    {
      path: '',
      component: SigninComponent
    },
    {
      path: 'signup',
      component: SignupComponent
    },
    {
      path: 'clock',
      component: ClockComponent
    },
    {
      path: 'reports',
      component: ReportsComponent
    }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
