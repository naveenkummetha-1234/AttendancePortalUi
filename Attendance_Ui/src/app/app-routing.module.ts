import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/Register/register/register.component';
import { LoginComponent } from './components/Login/login/login.component';
import { StaffComponent } from './components/Staff/staff/staff.component';
import { StandardComponent } from './components/Standard/standard/standard.component';
import { DivisionComponent } from './components/Division/division/division.component';
import { AttendanceComponent } from './components/Attendance/attendance/attendance.component';
import { ComplainComponent } from './components/Complain/complain/complain.component';
import { FeedbackComponent } from './FeedBack/feedback/feedback.component';
import { LeaveComponent } from './components/Leave/leave/leave.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {
    path:'staff',component:StaffComponent,
  },
  {
    path:'standard',component:StandardComponent,
  },
  {
    path:'division',component:DivisionComponent,
  },
  {
    path:'attendance',component:AttendanceComponent,
  },
  {
    path:'complain',component:ComplainComponent,
  },
  {
    path:'feedback',component:FeedbackComponent,
  },
  {
    path:'leave',component:LeaveComponent,
  },
  
  
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
