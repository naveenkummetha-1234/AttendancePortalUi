import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {
  PostDivision(formData: any) {
    return this._http.post("https://localhost:7185/api/Divisions/AddDivision/", formData);
  }

  updateDivision(formData: any) {
    debugger;
    return this._http.put("https://localhost:7185/api/Divisions/UpdateDivision/" + formData.id, formData);
  }

  constructor(private _http: HttpClient) { }

  GetAllDivision() {
    debugger;
    return this._http.get("https://localhost:7185/api/Divisions/GetAllDivision");
  }

  deleleDivision(id: any) {
    debugger;
    return this._http.delete("https://localhost:7185/api/Divisions/DeleteDivision/" + id)

  }
}


 

