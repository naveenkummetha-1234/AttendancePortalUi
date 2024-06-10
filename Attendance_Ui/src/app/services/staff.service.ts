import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  PostStaff(formData: any) {
    return this._http.post("https://localhost:7185/api/Staffs/AddStaff/", formData);
  }

  updateStaff(formData: any) {
    debugger;
    return this._http.put("https://localhost:7185/api/Staffs/UpdateStaff/" + formData.id, formData);
  }

  constructor(private _http: HttpClient) { }

  GetAllStaff() {
    debugger;
    return this._http.get("https://localhost:7185/api/Staffs/GetAllStaff");
  }

  deleleStaff(id: any) {
    debugger;
    return this._http.delete("https://localhost:7185/api/Staffs/DeleteStaff/" + id)

  }
}
