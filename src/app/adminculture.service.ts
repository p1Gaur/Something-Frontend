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

export class AdmincultureService {

  constructor(private http: HttpClient) { }

  sendCulture(cultureData) : Observable<any> {
    return this.http.post<any>(AppSettings.API_ENDPOINT + 'addNewCulture',cultureData,httpOptions);
  }

}