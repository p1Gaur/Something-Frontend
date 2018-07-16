import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSliderModule} from '@angular/material';
import {FilterFormService} from '../filter-form.service';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})

export class FilterFormComponent implements OnInit {
  
  constructor(private filterformservice : FilterFormService) { }

  filters = {'userId':"",'estBudget': "",'weddingDate':"",'noOfGuest':"",'noOfDays':""};
  minDate = new Date();
  
  isSubmitted : boolean = false;
  ngOnInit() {
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    else{
      return value + ' ';
    }

  }

  /*formatGuest(value: number | null)  {   

    console.log(value);
    this.filters.noOfGuest = value.toString();

    if (!value) {
      return 0;
    }

    else{
      
      return value + ' guests';
    }
  }

  formatDays(value: number | null)  {

    console.log(value);
    this.filters.noOfWeddingDays = value.toString();

    if (!value) { 
      return 0;
    }

    else{
      
      return value + ' days';
    }
  }*/

  submitFilters():void {

      console.log(this.filters.estBudget);
      console.log(this.filters.weddingDate);
      console.log(this.filters.noOfGuest);
      console.log(this.filters.noOfDays);
      this.filters.userId = localStorage.getItem('currentUserId');
      if(localStorage.getItem('LoggedIn') === '0'){

        alert("You must Log in to SUBMIT");
      }
      else{
        
        this.isSubmitted = true;

        this.filterformservice.sendFilters(this.filters)
        .subscribe(response => {
          console.log(response);
        });

      }
      
  }

  resetFilters():void {
    this.isSubmitted = false;
  }

}
