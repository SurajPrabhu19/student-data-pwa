import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url:string = "http://localhost:3000/"
  constructor(private http: HttpClient) { 
  }

  getTeachersProfile(): Observable<any>
  {
    return this.http.get(this.url+"teacherProfile");
  }

  getSubjectData(subjectName: string): Observable<any>
  {
    return this.http.get(this.url + subjectName);
  }

  getAllStudents(): Observable<any>{
    return this.http.get(this.url + "allStudents");
  }

}
