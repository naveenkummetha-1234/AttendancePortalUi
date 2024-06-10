import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeaveService } from '../../../services/leave.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrl: './leave.component.css'
})
export class LeaveComponent implements OnInit{
  leaveform!: FormGroup;
  leavedata: any;
  leave!: any;

  isloanding: boolean = false;
  loadingTitle: string = '';
  errors: any = [];

  Leave = {
    id: 0,
    rollno:'',
    name: '',
    studentname:'',
    message:'',
    nodays:'',
    replay:'',
    edate:'',
  };
  constructor(private fb: FormBuilder, private leaveservice: LeaveService) { }

  ngOnInit() {
    this.leaveform = this.fb.group({
      id: ['', Validators.required],
      rollno: ['', Validators.required],
      name: ['', Validators.required],
      studentname:['', Validators.required],
      message: ['', Validators.required],
      nodays: ['', Validators.required],
      replay: ['', Validators.required],
      edate: ['', Validators.required],
    });
    this.GetAll();
  }
  //this work for Fetching all data  from db
  GetAll() {
    debugger;
    this.leaveservice.GetAllLeave().subscribe(
      (response) => {
        this.leavedata = response;
      },
      (error) => {
        console.error('Error occurred while fetching states:', error);
      }
    );
  }
//this work for Delete ur record 
  deleteLeave(id: number) {
    this.leaveservice.deleleLeave(id).subscribe(res => {
      console.log("Data delete Su..", res);
      window.location.reload();
    })
  }
 //for Edit
  EditLeaveById(leave: any) {
    debugger;
    this.leaveform.patchValue({
      id: leave.id,
      rollno:leave.rollno,
      name: leave.name,
      studentname:leave.studentname,
      message:leave.message,
      nodays:leave.nodays,
      replay:leave.replay,
      edate:leave.edate
    });

  }

  //for post data and updTE DATA
  SubmitLeave() {
    debugger
    if (this.leaveform.valid) {
      const formData = this.leaveform.value;
      console.log('Form Data:', formData);

      if (formData.id > 0) {
        this.UpdateLeave(formData);
      } else {

        this.PostLeave({ rollno:formData.rollno,name: formData.name,studentname:formData.studentname,message:formData.message,nodays:formData.nodays,replay:formData.replay,edate:formData.edate });
      }
    } else {
      console.error('Form is invalid');
    }
  }

  PostLeave(formData: any) {
    debugger
    console.log('Posting data:', formData);
    this.leaveservice.PostLeave(formData).subscribe(
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

  UpdateLeave(formData: any) {
    console.log('Updating data:', formData);
    this.leaveservice.updateLeave(formData).subscribe(
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



