import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedBackService } from '../../services/feed-back.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent implements OnInit {

  feedbackform!: FormGroup;
  feedbackdata: any;
  feedback!: any;

  isloanding: boolean = false;
  loadingTitle: string = '';
  errors: any = [];

  FeedBack = {
    id: 0,
    email: '',
    mobile:'',
    feedback:'',
    edate:'',
  };
  constructor(private fb: FormBuilder, private feedbackservice: FeedBackService) { }

  ngOnInit() {
    this.feedbackform = this.fb.group({
      id: ['', Validators.required],
      email: ['', Validators.required],
      mobile:['', Validators.required],
      feedback: ['', Validators.required],
      edate: ['', Validators.required],
    });
    this.GetAll();
  }
  //this work for Fetching all data  from db
  GetAll() {
    debugger;
    this.feedbackservice.GetAllFeedBack().subscribe(
      (response) => {
        this.feedbackdata = response;
      },
      (error) => {
        console.error('Error occurred while fetching states:', error);
      }
    );
  }
//this work for Delete ur record 
  deleteFeedBack(id: number) {
    this.feedbackservice.deleleFeedBack(id).subscribe(res => {
      console.log("Data delete Su..", res);
      window.location.reload();
    })
  }
 //for Edit
  EditFeedBackById(feedback: any) {
    debugger;
    this.feedbackform.patchValue({
      id: feedback.id,
      
      email: feedback.email,
      mobile:feedback.mobile,
      feedback:feedback.feedback,
  
      edate:feedback.edate
    });

  }

  //for post data and updTE DATA
  SubmitFeedBack() {
    debugger
    if (this.feedbackform.valid) {
      const formData = this.feedbackform.value;
      console.log('Form Data:', formData);

      if (formData.id > 0) {
        this.UpdateFeedBack(formData);
      } else {

        this.PostFeedBack({ email:formData.email,mobile: formData.mobile,feedback:formData.feddback,edate:formData.edate });
      }
    } else {
      console.error('Form is invalid');
    }
  }

  PostFeedBack(formData: any) {
    debugger
    console.log('Posting data:', formData);
    this.feedbackservice.PostFeedBack(formData).subscribe(
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

  UpdateFeedBack(formData: any) {
    console.log('Updating data:', formData);
    this.feedbackservice.updateFeedBack(formData).subscribe(
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














