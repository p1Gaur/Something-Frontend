import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { LocalStorageService } from 'angular-2-local-storage';
import { AuthService } from '../auth.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  
  
  isLoggedIn$: Observable<boolean>=this.authService.isLoggedIn;
  LoggedIn : string = "";
  emailId : string;
  password : string;
  //counter : number = 0;
  constructor(public dialog: MatDialog, private localStorageService: LocalStorageService , 
    private authService: AuthService) {
    localStorage.setItem('counter','0');
  }
  
  openDialog(): void {
    
    if(localStorage.getItem('counter') == '0'){
      localStorage.setItem('counter','1');
      const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
        width: '400px',
        data: {emailId: this.emailId, password: this.password}
      });

      dialogRef.afterClosed().subscribe(result=>{
        console.log("the dialog was closed");
      });

    }
  }

  logOut(): void {

    localStorage.setItem('LoggedIn','0');
    localStorage.setItem('currentUserId',null);
    this.authService.logout();
  }


  ngOnInit() {

    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

}

