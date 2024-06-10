import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) 
export class RegisterService{


  constructor(private _http: HttpClient) { 
  
  }
  PostRegister(formData: any) {
    debugger;
    return this._http.post("https://localhost:7185/api/Students/AddStudent/", formData);
  }

  GetAllRegister() {
    debugger;
   return this._http.get("https://localhost:7185/api/Students/GetAllStudent");
  }
  private loginUrl = 'https://your-api-url.com/login'; // Replace with your API URL



  //login(email: string, password: string): Observable<any> {
  //  return this._http.post<any>(this.loginUrl, { email, password });
 // }
 updateRegister(formData: any) {
  debugger;
  return this._http.put("https://localhost:7185/api/Students/UpdateStudent/" + formData.id, formData)

 }

deleleRegister(id: any) {
  debugger;
  return this._http.delete("https://localhost:7185/api/Students/DeleteStudent/" + id)

}

} 

