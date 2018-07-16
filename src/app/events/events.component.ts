import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service'
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor( private eventsservice : EventsService) { }
  events;
  //events = [{'eventId':"1",'eventName':"Mehendi"},{'eventId':"2",'eventName':"Haldi"},{'eventId':"3",'eventName':"Sangeet"}];
   cultureId ={'cultureId':""};//localStorage.getItem('cultureId'))
  ngOnInit() {
    this.cultureId.cultureId = localStorage.getItem('cultureId');
    console.log(this.cultureId);
    this.eventsservice.populateEvents(this.cultureId)
      .subscribe(response=>{
        this.events = response;
      });

  }

  selectThis(eventId,eventName) : void{

    console.log(eventId);
    console.log(eventName);
    localStorage.setItem('eventId', eventId.toString());
    localStorage.setItem('eventName', eventName);

  }

}
