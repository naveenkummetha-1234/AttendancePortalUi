import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/Login/login/login.component';
import { RegisterComponent } from './components/Register/register/register.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StaffComponent } from './components/Staff/staff/staff.component';
import { StandardComponent } from './components/Standard/standard/standard.component';
import { DivisionComponent } from './components/Division/division/division.component';
import { AttendanceComponent } from './components/Attendance/attendance/attendance.component';
import { ComplainComponent } from './components/Complain/complain/complain.component';
import { FeedbackComponent } from './FeedBack/feedback/feedback.component';
import { LeaveComponent } from './components/Leave/leave/leave.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StaffComponent,
    StandardComponent,
    DivisionComponent,
    AttendanceComponent,
    ComplainComponent,
    FeedbackComponent,
    LeaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
