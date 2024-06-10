import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  registerform!: FormGroup;
  registerdata: any;
  register!: any;

  isloanding: boolean = false;
  loadingTitle: string = '';
  errors: any = [];
  constructor(private fb: FormBuilder, private registerservice: RegisterService) { }
  ngOnInit() {
    this.registerform = this.fb.group({
      id: ['', Validators.required],
       rollNo: ['', Validators.required],
      name: ['', Validators.required],
      standardName: ['', Validators.required],
      divisionName: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      genderId: ['', Validators.required],
      fileName: ['', Validators.required],
      filePath :['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],



    });
    this.GetAll();
  }
  //this work for Fetching all data  from db
  GetAll() {
    debugger;
    this.registerservice.GetAllRegister().subscribe(
      (response) => {
        this.registerdata = response;
      },
    );
  }



  PostRegister(formData: any) {
    debugger
    console.log('Posting data:', formData);
    this.registerservice.PostRegister(formData).subscribe(
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

  UpdateRegister(formData: any) {
    console.log('Updating data:', formData);
    this.registerservice.updateRegister(formData).subscribe(
      (response) => {
        console.log('Data updated successfully:', response);
        this.GetAll();
      },
      (error) => {
        console.error('Error occurred while updating country:', error);
      }
    );
  }
  deleleRegister(id: number) {
    this.registerservice.deleleRegister(id).subscribe(res => {
      console.log("Data delete Su..", res);
      window.location.reload();
    })
  }
 //for Edit
  EditRegisterById(register: any) {
    debugger;
    this.registerform.patchValue({
      id: register.id,
      rollno:register.rollno,
      name: register.name,
      standardName: register.standardName,
      divisionName: register.divisionName,
      email: register.email,
      mobile: register.mobile,
      dob: register.dob,
      address: register.address,
      city: register.city,
      pincode: register.pincode,
      genderId: register.genderId,
      fileName: register.fileName,
      filePath:register.filePath,
      userName:register.userName,
      password:register.password

    });

  }

}
  
  

    
  