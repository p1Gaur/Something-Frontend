import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { cartInfo, cartMenuInfo, cartVenueInfo, cartItemInfo, eventItemMapper, events } from './cart';
import { AppSettings } from './URLMapping';

@Injectable({
  providedIn: 'root'
})
export class CartService {

 

  private urlCheckOut:string = AppSettings.API_ENDPOINT +"checkoutcart";
  private urlItem:string = AppSettings.API_ENDPOINT +"getitemsincart";
  private urlMenu:string = AppSettings.API_ENDPOINT +"getCateringDetails";
  private urlVenue:string = AppSettings.API_ENDPOINT +"getVenueDetails";
  private urlForCartInfo: string = AppSettings.API_ENDPOINT +"getcartbyuser";
  private urlRemoveItem: string = AppSettings.API_ENDPOINT +"removeItemFromCart";
  private urlEventItemMapper: string = AppSettings.API_ENDPOINT +"removeItemFromCart";

  constructor(private http : HttpClient) { }

  getCartItem(userId) : Observable<cartItemInfo[]> {
    return this.http.post<cartItemInfo[]>(this.urlItem,{"cartid": userId});
  }
  getCartVenue(venueId: number) : Observable<cartVenueInfo> {
    return this.http.post<cartVenueInfo>(this.urlVenue,{"venueId": venueId});
  }
  getCartMenu(menuId: number) : Observable<cartMenuInfo> {
    return this.http.post<cartMenuInfo>(this.urlMenu,{"menuId": menuId});
  }
  getCartInfo(userId) : Observable<cartInfo> {
    return this.http.post<cartInfo>(this.urlForCartInfo,{"userid" : userId});
  }
  checkOut(cartInfo: any) : Observable <any>{
    return this.http.post(this.urlCheckOut,{"cartid" : cartInfo.cartId});
  }
  removeItem(cartItem: any, userId): Observable <any>{
    return this.http.post(this.urlRemoveItem,{"userId":userId, "itemId": cartItem.itemId, "eventId": cartItem.eventId})
  }
}
