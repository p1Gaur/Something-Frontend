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
export class CultureSelectService {

  constructor(private http: HttpClient) { }

  populateCultures() : Observable<any> {
    
    return this.http.get<any>(AppSettings.API_ENDPOINT + 'getAllCulture');

  }

  sendCultureId(cultureData) : Observable<any> {
    console.log(cultureData);
    return this.http.post<any>(AppSettings.API_ENDPOINT + 'setCulture', cultureData, httpOptions);

  }
}
