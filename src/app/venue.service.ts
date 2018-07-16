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
export class VenueService {

  constructor( private http: HttpClient) { }
  
  venueDisplay(getVenuesData) : Observable<any> {
    
    return this.http.post<any>( AppSettings.API_ENDPOINT + 'getVenues',getVenuesData,httpOptions);

  }

  selectedVenue(sendVenueFilter) : Observable<any> {
    
    return this.http.post<any>(AppSettings.API_ENDPOINT+'setVenue',sendVenueFilter,httpOptions);

  }
}
