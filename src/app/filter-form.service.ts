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

export class FilterFormService {

  constructor(private http: HttpClient) { }

  sendFilters(filterData) : Observable<any> {
    
    return this.http.post<any>(AppSettings.API_ENDPOINT + 'addfilters',filterData,httpOptions);

  }

}
