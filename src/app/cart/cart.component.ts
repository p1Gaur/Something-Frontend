import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  ngOnInit() {
  }

  public cartItem=[];
  public venue={};
  public catering={};
  showVenue: boolean= false;
  showCatering: boolean= false;
  userId;
  cartInfo={};

  constructor(private cartService: CartService) { }

 
fillCart(cartInfo) {
  //console.log(cartInfo);
  this.cartInfo=cartInfo;
  this.showCatering=true; this.showVenue=true;
  this.cartService.getCartMenu(cartInfo.menuId).subscribe(datac => this.catering=datac);
  this.cartService.getCartItem(cartInfo.cartId).subscribe(data => this.cartItem=data);
  this.cartService.getCartVenue(cartInfo.venueId).subscribe(datav => this.venue=datav);  
}

getCart() {
  this.userId = localStorage.getItem('currentUserId');
  this.cartService.getCartInfo(this.userId).subscribe(data => this.fillCart(data))
}

closeV() {
  this.venue={};
  this.showVenue=false;
}
closeC() {
  this.catering={};
  this.showCatering=false;

}
closeItem(i) {
  this.cartService.removeItem(this.cartItem,this.userId)
  this.cartItem.splice(i,1)

}
checkOut() {
  var flag: string;
  this.cartService.checkOut(this.cartInfo).subscribe(data => {localStorage.setItem('currentOrderId',data);console.log(data)});
}


}
