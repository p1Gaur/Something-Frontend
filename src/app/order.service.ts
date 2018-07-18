import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from './URLMapping';
import {  orderMenuInfo, orderVenueInfo } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private urlGetOrders:string = AppSettings.API_ENDPOINT +"getOrderDetails";
  private urlItem:string = AppSettings.API_ENDPOINT +"getitemsinOrder";
  private urlMenu:string = AppSettings.API_ENDPOINT +"getCateringDetails";
  private urlVenue:string = AppSettings.API_ENDPOINT +"getVenueDetails";
  private urlPrice:string = AppSettings.API_ENDPOINT +"getOrderPrice";
  constructor(private http : HttpClient) { }

  getOrderDetails(userId:string,orderId:string) : Observable<any> {
    return this.http.post(this.urlGetOrders,{"userId": userId,"orderId":orderId});
  }

  getOrderItem(orderId) : Observable<any> {
    return this.http.post(this.urlItem,{"orderid": orderId});
  }
  getOrderVenue(venueId:number) : Observable<any> {
    return this.http.post(this.urlVenue,{"venueId": venueId});
  }
  getOrderMenu(menuId:number) : Observable<any> {
    return this.http.post(this.urlMenu,{"menuId": menuId});
  }
  getOrderPrice(orderId) : Observable<any> {
    return this.http.post(this.urlPrice,{"orderId" : orderId});
  }

}