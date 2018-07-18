import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private orderService:OrderService ) {}
 
  showItems: boolean= false;
  userId;
  orderId;
  orderInfo;

  ngOnInit() {
    this.getOrder();
  }

  fillOrderDetails(orderInfo) {
    //console.log(cartInfo);
    this.orderInfo=orderInfo;
    console.log(this.orderInfo);
    if(this.orderInfo.items!=null)
    {
      this.showItems=true;
    }
  }
  
getOrder() {
  this.userId = localStorage.getItem('currentUserId');
  this.orderId=localStorage.getItem('currentOrderId');
  console.log(localStorage.getItem('currentOrderId'));    
  console.log(this.orderId+" "+this.userId);
  //localStorage.getItem('currentOrderId');
  this.orderService.getOrderDetails(this.userId,this.orderId).subscribe(data => this.fillOrderDetails(data))
  }

}