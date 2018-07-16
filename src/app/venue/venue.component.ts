import { Component, OnInit } from '@angular/core';
import { VenueService } from '../venue.service'
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {

  constructor(private venueservice: VenueService) { }
  venueDetails;
  selected = '';
  //venueDetails = [{ 'venueName':"delhi", 'venueId':"123"},
  //{'venueName':"mumbai", 'venueId':"223"},{'venueName':"hyderabad", 'venueId':"333"}];
  venueId : number;
  sendVenueFilter = {'userId':"", 'venueId': "" };
  getVenuesData ={'userId':"", 'venueLocation' : ""};
  
  ngOnInit() {}
    
    

  selectLocation(): void{
      
      
      this.getVenuesData.venueLocation = this.selected;
      this.getVenuesData.userId =localStorage.getItem('currentUserId');
      console.log(this.getVenuesData);

      this.venueservice.venueDisplay(this.getVenuesData)
        .subscribe(response => {
        this.venueDetails = response;
        console.log(this.venueDetails);
      });
    }

    selectVenue() : void{

      this.sendVenueFilter.userId = localStorage.getItem('currentUserId');
      this.sendVenueFilter.venueId = this.venueId.toString();
      console.log(this.sendVenueFilter);
      this.venueservice.selectedVenue(this.sendVenueFilter)
        .subscribe(response => {
          console.log(response);
          if(response == 0){
            alert("venue selected");
          }
      });

    }
    
    
  }

  
