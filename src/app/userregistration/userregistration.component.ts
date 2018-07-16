import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {

  constructor(private userregistrationService : UserRegistrationService ) { }

  ngOnInit() {
  }

  newUser = {'userName':"",'userPass':"",'usermailId':"",'userContact':""};

  submit(userName,password,emailid,contact){
    console.log(userName+password+emailid+contact);
    this.newUser.userName = userName;
    this.newUser.userPass = password;
    this.newUser.usermailId = emailid;
    this.newUser.userContact = contact;
    this.userregistrationService.register(this.newUser)
    .subscribe(response => {  

      console.log(response);
      if(response == 1 ){
        alert( "Successfully registered!" );
        document.getElementById('id01').style.display='none';
      }
      else alert("Sorry! please register again");
      
    });
  }

}
