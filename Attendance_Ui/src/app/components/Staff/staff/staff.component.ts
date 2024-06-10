import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StaffService } from '../../../services/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css'
})
export class StaffComponent implements OnInit{
  Staffform!: FormGroup;
  Staffdata: any;
  Staff!: any;

  isloanding: boolean = false;
  loadingTitle: string = '';
  errors: any = [];

  staff = {
    id: 0,
    name: '',
    email:'',
    mobile:'',
    qualification:'',
    address:'',
    city:'',
    pincode:'',
    genderid:0,
    filename:'',
    filepath:'',
    username:'',
    password:''

  };
  constructor(private fb: FormBuilder, private staffservice: StaffService) { }
  
  ngOnInit() {
    this.Staffform = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      qualification: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      genderid: ['', Validators.required],
      filename: ['', Validators.required],
      filepath: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      
    });
    this.GetAll();
  }
  //this work for Fetching all data  from db
  GetAll() {
    debugger;
    this.staffservice.GetAllStaff().subscribe(
      (response) => {
        this.Staffdata = response;
      },
      (error) => {
        console.error('Error occurred while fetching states:', error);
      }
    );
  }
//this work for Delete ur record 
  deleteStaff(id: number) {
    this.staffservice.deleleStaff(id).subscribe(res => {
      console.log("Data delete Su..", res);
      window.location.reload();
    })
  }
 //for Edit
  EditStaffById(staff: any) {
    debugger;
    this.Staffform.patchValue({
      id: staff.id,
      name: staff.name,
      email: staff.email,
      mobile: staff.mobile,
      qualification: staff.qualification,
      address: staff.address,
      city: staff.city,
      pincode: staff.pincode,
      genderid: staff.genderid,
      filename: staff.filename,
      filepath: staff.filepath,
      username: staff.username,
      password:staff.password

    
    });

  }

  //for post data and updTE DATA
  SubmitStaff() {
    debugger
    if (this.Staffform.valid) {
      const formData = this.Staffform.value;
      console.log('Form Data:', formData);

      if (formData.id > 0) {
        this.UpdateStaff(formData);
      } else {

        this.PostStaff({ name: formData.name,email:formData.email, mobile: formData.mobile,qualification:formData.qualification, address: formData.address,city:formData.city, pincode: formData.pincode,genderid:formData.genderid, filename: formData.filename,filepath:formData.filepath,username: formData.username,password:formData.password });
      }
    } else {
      console.error('Form is invalid');
    }
  }

  PostStaff(formData: any) {
    debugger;
    console.log('Posting data:', formData);
    this.staffservice.PostStaff(formData).subscribe(
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

  UpdateStaff(formData: any) {
    console.log('Updating data:', formData);
    this.staffservice.updateStaff(formData).subscribe(
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
