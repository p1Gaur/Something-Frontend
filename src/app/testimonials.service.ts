import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AppSettings } from './URLMapping';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  constructor(private http: HttpClient) { }
  sendTestimonial(testData) : Observable<any> {
    return this.http.post<any>(AppSettings.API_ENDPOINT + 'addNewTestimonial',testData,httpOptions);
  }
  getTestimonial() : Observable<any>{
    return this.http.get<any>(AppSettings.API_ENDPOINT + 'getAllTestimonials');
  }
  checkUser(userId): Observable<any>{
    return this.http.post<any>(AppSettings.API_ENDPOINT + 'checkUserForOrders',userId,httpOptions);
  }
}