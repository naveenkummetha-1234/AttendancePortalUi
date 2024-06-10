import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DivisionService } from '../../../services/division.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrl: './division.component.css'
})
export class DivisionComponent implements OnInit{
  divisionform!: FormGroup;
  divisiondata: any;
  division!: any;

  isloanding: boolean = false;
  loadingTitle: string = '';
  errors: any = [];

  Division = {
    id: 0,
    name: '',
    seat:0,
    standardid:0,
  };
  constructor(private fb: FormBuilder, private divisionservice: DivisionService) { }

  ngOnInit() {
    this.divisionform = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      seat:['', Validators.required],
      standardid: ['', Validators.required],
    });
    this.GetAll();
  }
  //this work for Fetching all data  from db
  GetAll() {
    debugger;
    this.divisionservice.GetAllDivision().subscribe(
      (response) => {
        this.divisiondata = response;
      },
      (error) => {
        console.error('Error occurred while fetching states:', error);
      }
    );
  }
//this work for Delete ur record 
  deleteDivision(id: number) {
    this.divisionservice.deleleDivision(id).subscribe(res => {
      console.log("Data delete Su..", res);
      window.location.reload();
    })
  }
 //for Edit
  EditDivisionById(division: any) {
    debugger;
    this.divisionform.patchValue({
      id: division.id,
      name: division.name,
      seat:division.seat,
      standardid:division.standardid
    });

  }

  //for post data and updTE DATA
  SubmitDivision() {
    debugger
    if (this.divisionform.valid) {
      const formData = this.divisionform.value;
      console.log('Form Data:', formData);

      if (formData.id > 0) {
        this.UpdateDivision(formData);
      } else {

        this.PostDivision({ name: formData.name,standardid:formData.standardid,seat:formData.seat });
      }
    } else {
      console.error('Form is invalid');
    }
  }

  PostDivision(formData: any) {
    debugger
    console.log('Posting data:', formData);
    this.divisionservice.PostDivision(formData).subscribe(
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

  UpdateDivision(formData: any) {
    console.log('Updating data:', formData);
    this.divisionservice.updateDivision(formData).subscribe(
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





