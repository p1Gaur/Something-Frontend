import { Component, OnInit } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  public imagesUrl;

  ngOnInit() {

    this.imagesUrl = [
      'https://www.culturalindia.net/iliimages/Wedding-Decoration-1.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVZRTyxQ-3VGX1qQcxLbUqleLYchCSE3dwuS6HtDSVjaVsjcd',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbAdWjJueF2P-fy2_S3FtRfZ1Rz9JsLqZnsZMVeFJDUvmbIyLkWg',
      ];
  }

  

}
