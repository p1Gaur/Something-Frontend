import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {CultureSelectService} from '../culture-select.service'

@Component({
  selector: 'app-cultures',
  templateUrl: './cultures.component.html',
  styleUrls: ['./cultures.component.css']
})

export class CulturesComponent implements OnInit {
  setCultureData = {'userId':"", 'cultureId' : ""};
  isSubmitted : boolean = false;  
  constructor(private cultureselectService: CultureSelectService) { }
  //cultures = [{'culid':"122",'name':"hindu"},{'culid':"222",'name':"christian"},{'culid':"133",'name':"jain"}];
  cultures;
  ngOnInit() {

    this.cultureselectService.populateCultures()
      .subscribe(response => {
        this.cultures = response;
      });
  }

  selectThis(cultureId): void{
    console.log(cultureId);

    this.setCultureData.userId = localStorage.getItem('currentUserId');
    this.setCultureData.cultureId = cultureId;
    console.log(this.setCultureData);
    this.cultureselectService.sendCultureId(this.setCultureData)
    .subscribe(response => {
      console.log(response);
    });
    localStorage.setItem('cultureId',cultureId)
    this.isSubmitted = true;
  }

}
