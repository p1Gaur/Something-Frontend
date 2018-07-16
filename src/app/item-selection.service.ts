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
export class ItemSelectionService {

  constructor(private http: HttpClient) { }

  getItems() : Observable<any> {
    
    return this.http.get<any>(AppSettings.API_ENDPOINT + 'getAllItems');

  }

  sendItem(selected) : Observable<any> {
    
    return this.http.post<any>(AppSettings.API_ENDPOINT + 'setItem', selected, httpOptions);

  }

}
