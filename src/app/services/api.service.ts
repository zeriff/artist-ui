import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Submission } from "../class/submission";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private base_url: string;
  constructor(private http: HttpClient, @Inject("BASE_URL") base_url: string) {
    this.base_url = base_url;
    let optionsUrl = this.base_url + "/options";
    this.http.options(optionsUrl).subscribe(() => {
      console.log("OPTIONS");
    });
  }
  getPins(id): Observable<any> {
    let url = `${this.base_url}/pins/by_category/${id}`;
    return this.http.get(url);
  }

  getCategories() {
    let url = this.base_url + "/categories";
    return this.http.get(url);
  }

  postSubmission(formData: Submission): Observable<any> {
    let url = this.base_url + "/submissions";
    return this.http.post(url, formData);
  }
  getSubmissions(): Observable<any> {
    let url = this.base_url + "/submissions";
    return this.http.get(url);
  }
  getSubmission(id): Observable<Submission> {
    let url = `${this.base_url}/submissions/${id}`;
    return this.http.get(url);
  }
  updateSubmission(formData: Submission, id: string): Observable<Submission> {
    let url = `${this.base_url}/submissions/${id}`;
    return this.http.put(url, formData);
  }
}
