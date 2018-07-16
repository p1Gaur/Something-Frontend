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
export class CateringService {

  constructor(private http: HttpClient) { }

  menuDisplay(userId) : Observable<any> {
    
    return this.http.post<any>(AppSettings.API_ENDPOINT + 'getCateringItems', userId, httpOptions);

  }

  selectedMenu(cateringId): Observable<any> {
    
    return this.http.post<any>(AppSettings.API_ENDPOINT + 'setFoodPackage', cateringId, httpOptions);

  }
}
