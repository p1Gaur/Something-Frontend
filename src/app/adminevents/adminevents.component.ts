import { Component, OnInit } from '@angular/core';
import { AdmineventsService } from '../adminevents.service';

@Component({
  selector: 'app-adminevents',
  templateUrl: './adminevents.component.html',
  styleUrls: ['./adminevents.component.css']
})
export class AdmineventsComponent implements OnInit {

  constructor(private admineventsservice : AdmineventsService) { }

  events = {'eventName' : "", 'cultureName' : ""};
  isSubmitted : boolean = false;

  ngOnInit() {
  }

  submitFilters():void{
    console.log(this.events.eventName);
    console.log(this.events.cultureName);
    this.isSubmitted = true;

        this.admineventsservice.sendEvents(this.events)
        .subscribe(response => {
          console.log(response);
        });
  }

  resetFilters():void {
    this.isSubmitted = false;
  }

}
