import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StandardService } from '../../../services/standard.service';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrl: './standard.component.css'
})
export class StandardComponent implements OnInit {
  
  standardform!: FormGroup;
  standarddata: any;
  standard!: any;

  isloanding: boolean = false;
  loadingTitle: string = '';
  errors: any = [];

  Standard = {
    id: 0,
    name: ''
  };
  constructor(private fb: FormBuilder, private standardservice: StandardService) { }

  ngOnInit() {
    this.standardform = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required]
    });
    this.GetAll();
  }
  //this work for Fetching all data  from db
  GetAll() {
    this.standardservice.GetAllStandard().subscribe(
      (response) => {
        this.standarddata = response;
      },
      (error) => {
        console.error('Error occurred while fetching countries:', error);
      }
    );
  }
//this work for Delete ur record 
  deleteStandard(id: number) {
    this.standardservice.deleleStandard(id).subscribe(res => {
      console.log("Data delete Su..", res);
      window.location.reload();
    })
  }
 //for Edit
  EditStandardById(standard: any) {
    debugger;
    this.standardform.patchValue({
      id: standard.id,
      name: standard.name
    });

  }

  //for post data and updTE DATA
  SubmitStandard() {
    debugger
    if (this.standardform.valid) {
      const formData = this.standardform.value;
      console.log('Form Data:', formData);

      if (formData.id > 0) {
        this.UpdateStandard(formData);
      } else {

        this.PostStandard({ name: formData.name });
      }
    } else {
      console.error('Form is invalid');
    }
  }

  PostStandard(formData: any) {
    debugger
    console.log('Posting data:', formData);
    this.standardservice.PostStandard(formData).subscribe(
      (response) => {
        console.log('Data posted successfully:', response);
        window.location.reload();
        this.GetAll();
      },
      (error) => {
        console.error('Error occurred while posting country:', error);
      }

    );
  }

  UpdateStandard(formData: any) {
    console.log('Updating data:', formData);
    this.standardservice.updateStandard(formData).subscribe(
      (response) => {
        console.log('Data updated successfully:', response);
        this.GetAll();
      },
      (error) => {
        console.error('Error occurred while updating country:', error);
      }
    );
  }

}
