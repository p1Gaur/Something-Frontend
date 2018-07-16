import { Component, OnInit } from '@angular/core';
import {CateringService} from '../catering.service';
import {MatSnackBar} from '@angular/material';
//import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.css']
})

export class CateringComponent implements OnInit {

  constructor(private cateringservice : CateringService /*, private snackbarcomponent : SnackbarComponent*/) { }

  menuDetails;
  menuId : number;
  menuSend = {'userId': "", 'menuId' : ""};

  ngOnInit() {
    this.menuSend.userId = localStorage.getItem('currentUserId');
    this.cateringservice.menuDisplay(this.menuSend)
      .subscribe(response => {
      this.menuDetails = response;
      console.log(this.menuDetails);
      });
  }

  
  selectMenu(): void{
   /* if(localStorage.getItem('LoggedIn') === '0'){
        this.snackbarcomponent.openSnackBar();
    }

    else{*/

      this.menuSend.menuId = this.menuId.toString();
      console.log(this.menuSend);
      this.cateringservice.selectedMenu(this.menuSend)
      .subscribe(response => {
      
      console.log(response);
      if(response == 0){
        alert("Food package selected");
      }
      });

   // }
    

  }

}
