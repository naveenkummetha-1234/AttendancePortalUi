import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  PostLeave(formData: any) {
    return this._http.post("https://localhost:7185/api/Leaves/AddLeave/", formData);
  }

  updateLeave(formData: any) {
    debugger;
    return this._http.put("https://localhost:7185/api/Leaves/UpdateLeave/" + formData.id, formData);
  }

  constructor(private _http:HttpClient) { }

  GetAllLeave() {
    debugger;
    return this._http.get("https://localhost:7185/api/Leaves/GetAllLeave");
  }

  deleleLeave(id: any) {
    debugger;
    return this._http.delete("https://localhost:7185/api/Leaves/DeleteLeave/" + id)

  }
}

