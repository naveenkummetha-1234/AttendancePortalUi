import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplainService {

  
  PostComplain(formData: any) {
    return this._http.post("https://localhost:7185/api/Complains/AddComplain/", formData);
  }

  updateComplain(formData: any) {
    debugger;
    return this._http.put("https://localhost:7185/api/Complains/UpdateComplain/" + formData.id, formData);
  }

  constructor(private _http:HttpClient) { }

  GetAllComplain() {
    debugger;
    return this._http.get("https://localhost:7185/api/Complains/GetAllComplain");
  }

  deleleComplain(id: any) {
    debugger;
    return this._http.delete("https://localhost:7185/api/Complains/DeleteComplain/" + id)

  }
}

