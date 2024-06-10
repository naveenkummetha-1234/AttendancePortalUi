import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComplainService } from '../../../services/complain.service';

@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrl: './complain.component.css'
})
export class ComplainComponent implements OnInit{
  complainform!: FormGroup;
  complaindata: any;
  complain!: any;

  isloanding: boolean = false;
  loadingTitle: string = '';
  errors: any = [];

  Complain = {
    id: 0,
    rollno:'',
    name: '',
    subject:'',
    message:'',
    reply:'',
    edate:'',
  };
  constructor(private fb: FormBuilder, private complainservice: ComplainService) { }

  ngOnInit() {
    this.complainform = this.fb.group({
      id: ['', Validators.required],
      rollno: ['', Validators.required],
      name: ['', Validators.required],
      subject:['', Validators.required],
      message: ['', Validators.required],
      reply: ['', Validators.required],
      edate: ['', Validators.required],
    });
    this.GetAll();
  }
  //this work for Fetching all data  from db
  GetAll() {
    debugger;
    this.complainservice.GetAllComplain().subscribe(
      (response) => {
        this.complaindata = response;
      },
      (error) => {
        console.error('Error occurred while fetching states:', error);
      }
    );
  }
//this work for Delete ur record 
  deleteComplain(id: number) {
    this.complainservice.deleleComplain(id).subscribe(res => {
      console.log("Data delete Su..", res);
      window.location.reload();
    })
  }
 //for Edit
  EditComplainById(complain: any) {
    debugger;
    this.complainform.patchValue({
      id: complain.id,
      rollno:complain.rollno,
      name: complain.name,
      subject:complain.subject,
      message:complain.message,
      reply:complain.reply,
      edate:complain.edate
    });

  }

  //for post data and updTE DATA
  SubmitComplain() {
    debugger
    if (this.complainform.valid) {
      const formData = this.complainform.value;
      console.log('Form Data:', formData);

      if (formData.id > 0) {
        this.UpdateComplain(formData);
      } else {

        this.PostComplain({ rollno:formData.rollno,name: formData.name,subject:formData.subject,message:formData.message,reply:formData.reply,edate:formData.edate });
      }
    } else {
      console.error('Form is invalid');
    }
  }

  PostComplain(formData: any) {
    debugger
    console.log('Posting data:', formData);
    this.complainservice.PostComplain(formData).subscribe(
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

  UpdateComplain(formData: any) {
    console.log('Updating data:', formData);
    this.complainservice.updateComplain(formData).subscribe(
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











