import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttendanceService } from '../../../services/attendance.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css'
})
export class AttendanceComponent implements OnInit {
  attendanceform!: FormGroup;
  attendancedata: any;
  attendance!: any;

  isloanding: boolean = false;
  loadingTitle: string = '';
  errors: any = [];

  Attendance = {
    id: 0,
    rollno:'',
    name: '',
    date:'',
    status:'',
    staffname:'',
    edate:'',
  };
  constructor(private fb: FormBuilder, private attendanceservice: AttendanceService) { }

  ngOnInit() {
    this.attendanceform = this.fb.group({
      id: ['', Validators.required],
      rollno: ['', Validators.required],
      name: ['', Validators.required],
      date:['', Validators.required],
      status: ['', Validators.required],
      staffname: ['', Validators.required],
      edate: ['', Validators.required],
    });
    this.GetAll();
  }
  //this work for Fetching all data  from db
  GetAll() {
    debugger;
    this.attendanceservice.GetAllAttendance().subscribe(
      (response) => {
        this.attendancedata = response;
      },
      (error) => {
        console.error('Error occurred while fetching states:', error);
      }
    );
  }
//this work for Delete ur record 
  deleteAttendance(id: number) {
    this.attendanceservice.deleleAttendance(id).subscribe(res => {
      console.log("Data delete Su..", res);
      window.location.reload();
    })
  }
 //for Edit
  EditAttendanceById(attendance: any) {
    debugger;
    this.attendanceform.patchValue({
      id: attendance.id,
      rollno:attendance.rollno,
      name: attendance.name,
      date:attendance.date,
      status:attendance.status,
      staffname:attendance.staffname,
      edate:attendance.edate
    });

  }

  //for post data and updTE DATA
  SubmitAttendance() {
    debugger
    if (this.attendanceform.valid) {
      const formData = this.attendanceform.value;
      console.log('Form Data:', formData);

      if (formData.id > 0) {
        this.UpdateAttendance(formData);
      } else {

        this.PostAttendance({ rollno:formData.rollno,name: formData.name,date:formData.date,status:formData.status,staffname:formData.staffname,edate:formData.edate });
      }
    } else {
      console.error('Form is invalid');
    }
  }

  PostAttendance(formData: any) {
    debugger
    console.log('Posting data:', formData);
    this.attendanceservice.PostAttendance(formData).subscribe(
      (response) => {
        console.log('Data posted successfully:', response);
        window.location.reload();
        this.GetAll();
      },
      (error) => {
        console.error('Error occurred while posting state:', error);
      }

    );
  }

  UpdateAttendance(formData: any) {
    console.log('Updating data:', formData);
    this.attendanceservice.updateAttendance(formData).subscribe(
      (response) => {
        console.log('Data updated successfully:', response);
        this.GetAll();
      },
      (error) => {
        console.error('Error occurred while updating state:', error);
      }
    );
  }

}







