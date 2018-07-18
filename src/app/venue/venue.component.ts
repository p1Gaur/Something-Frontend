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
    
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  // }
  // selectLocation(): void{   
      this.getVenuesData.venueLocation = label;
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
    
    
    zoom: number = 5;
  
    // initial center position for the map
    lat: number = 21.146633;
    lng: number =79.088860;
    
    markers: marker[] = [
    
      {lat: 12.972442,
      lng:77.580643,
        label: 'Bengaluru',
        draggable: true
      },
      {
        lat:15.533414,
        lng:73.764954,
        label: 'Goa',
        draggable: true
      },
      {lat:24.571270,
        lng:73.691544,
        label: 'Udaipur',
        draggable: true
      },
      {
        lat:28.644800,
        lng:77.216721,
        label: 'New Delhi',
        draggable: true
      },
      {
        lat: 17.387140,lng:78.491684,
        label: 'Hyderabad',
        draggable: true
      },
      {
        lat: 19.07283,lng:72.88261,
        label: 'Mumbai',
        draggable: true
      },
     
      
    ]
  }
  
  // just an interface for type safety.
  interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
  }
  
