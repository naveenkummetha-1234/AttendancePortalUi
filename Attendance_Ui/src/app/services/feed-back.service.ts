import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedBackService {

  PostFeedBack(formData: any) {
    return this._http.post("https://localhost:7185/api/FeedBacks/AddFeedBack/", formData);
  }

  updateFeedBack(formData: any) {
    debugger;
    return this._http.put("https://localhost:7185/api/FeedBacks/UpdateFeedBack/" + formData.id, formData);
  }

  constructor(private _http: HttpClient) { }

  GetAllFeedBack() {
    debugger;
    return this._http.get("https://localhost:7185/api/FeedBacks/GetAllFeedBack");
  }

  deleleFeedBack(id: any) {
    debugger;
    return this._http.delete("https://localhost:7185/api/FeedBacks/DeleteFeedBack/" + id)

  }
}

