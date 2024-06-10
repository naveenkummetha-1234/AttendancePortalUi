import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StandardService {

  PostStandard(formData: any) {
    return this._http.post("https://localhost:7185/api/Standards/AddStandard/", formData);
  }

  updateStandard(formData: any) {
    debugger;
    return this._http.put("https://localhost:7185/api/Standards/UpdateStandard/" + formData.id, formData);
  }

  constructor(private _http: HttpClient) { }

  GetAllStandard() {
    return this._http.get("https://localhost:7185/api/Standards/GetAllStandard");
  }

  deleleStandard(id: any) {
    debugger;
    return this._http.delete("https://localhost:7185/api/Standards/DeleteStandard/" + id)

  }
}
