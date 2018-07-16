import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { LoginService } from '../login.service'
import { SELECT_ITEM_HEIGHT_EM } from '@angular/material';
import { AuthService } from '../auth.service';
import { Observable, of } from 'rxjs';

export interface DialogData {
  emailgdh: string;
  passworddjh: string;
}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
  styleUrls: ['./dialog-overview-example-dialog.component.css']
})
export class DialogOverviewExampleDialogComponent implements OnInit   {
 
 isLoggedIn$: Observable<boolean>;  
 sendData={'email':"",'password':""} 
  user_id :number;
  obj;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    private loginService: LoginService, 
    private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public data : DialogData) {
      
    }

  onNoClick(): void {
    this.dialogRef.close();
    localStorage.setItem('counter','0');
  }

  onLogin(): void {
    if(this.sendData.email == "" || this.sendData.password == ""){
      alert("Please enter the required details");
    }
    else{
      console.log(this.sendData.email);
      this.loginService.authenticate(this.sendData)
      .subscribe(response => {
        this.user_id = response;
        if(this.user_id != 0){
          console.log(this.user_id);
          localStorage.setItem('currentUserId', this.user_id.toString());
          console.log(localStorage.getItem('currentUserId'));
          localStorage.setItem('LoggedIn','1');
          this.onNoClick();
          this.authService.login();
        }
      });

     
      
    }
  }

  onSignup(): void {
    this.onNoClick();
  }

  ngOnInit() {

    this.isLoggedIn$ = this.authService.isLoggedIn; 

  }

}
