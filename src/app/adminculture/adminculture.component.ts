import { Component, OnInit } from '@angular/core';
import { AdmincultureService } from '../adminculture.service';

@Component({
  selector: 'app-adminculture',
  templateUrl: './adminculture.component.html',
  styleUrls: ['./adminculture.component.css']
})
export class AdmincultureComponent implements OnInit {

  constructor(private admincultureservice : AdmincultureService) { }

  culture = {'cultureName' : ""};
  isSubmitted : boolean = false;

  ngOnInit() {
  }

  submitFilters():void{
    console.log(this.culture.cultureName);
    this.isSubmitted = true;

        this.admincultureservice.sendCulture(this.culture)
        .subscribe(response => {
          console.log(response);
        });
  }

  resetFilters():void {
    this.isSubmitted = false;
  }

}
