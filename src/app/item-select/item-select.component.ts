import { Component, OnInit } from '@angular/core';
import {ItemSelectionService} from '../item-selection.service';

@Component({
  selector: 'app-item-select',
  templateUrl: './item-select.component.html',
  styleUrls: ['./item-select.component.css']
})
export class ItemSelectComponent implements OnInit {
  
  constructor(private itemselectionservice : ItemSelectionService) { }
  //items = [{'itemId':"1",'itemName':"aaa",'itemType':"Decor"},{'itemId':"2",'itemName':"aaa",'itemType':"Decor"},{'itemId':"3",'itemName':"aaa",'itemType':"Grooming"},{'itemId':"4",'itemName':"aaa",'itemType':"Grooming"},{'itemId':"5",'itemName':"aaa",'itemType':"Logistics"},{'itemId':"6",'itemName':"aaa",'itemType':"Logistics"}];;
  eventName : string;
  items;
  selected = {'userId':"",'eventId':"",'itemId':""};
  ngOnInit() {
    this.itemselectionservice.getItems()
      .subscribe(response=>{
        this.items = response;
      });

      this.eventName = localStorage.getItem('eventName');
      this.selected.eventId = localStorage.getItem('eventId');
      this.selected.userId = localStorage.getItem('currentUserId');
  }
  

  onAreaListControlChanged(list){

    console.log( list.selectedOptions.selected.map(item => item.value));
    this.selected.itemId = list.selectedOptions.selected.map(item => item.value).toString();
    console.log(this.selected);
    this.itemselectionservice.sendItem(this.selected)
      .subscribe(response=>{
        console.log(response);
      });

  }



}
