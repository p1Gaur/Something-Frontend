import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { CateringComponent } from '../catering/catering.component';
import { VenueComponent } from '../venue/venue.component';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar() {
    this.snackBar.openFromComponent(CateringComponent, {
      duration: 500,
    });
  }

  openSnackBar2() {
    this.snackBar.openFromComponent(VenueComponent, {
      duration: 500,
    });
  }

}
