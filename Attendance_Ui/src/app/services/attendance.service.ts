import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  PostAttendance(formData: any) {
    return this._http.post("https://localhost:7185/api/Attendances/AddAttendance/", formData);
  }

  updateAttendance(formData: any) {
    debugger;
    return this._http.put("https://localhost:7185/api/Attendances/UpdateAttendance/" + formData.id, formData);
  }

  constructor(private _http:HttpClient) { }

  GetAllAttendance() {
    debugger;
    return this._http.get("https://localhost:7185/api/Attendances/GetAllAttendance");
  }

  deleleAttendance(id: any) {
    debugger;
    return this._http.delete("https://localhost:7185/api/Attendances/DeleteAttendance/" + id)

  }
}


 


