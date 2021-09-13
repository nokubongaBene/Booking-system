import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public authService:AuthService, private router:Router) {
    
       };
       checkIn: any = "";
       checkOut:any = "";
       numAdults:any= "";
       numKids: any = "";
      fname  : any = "";
      lname : any = "";
      email : any = "";
      cellphone: any = "";
      address: any = "";
      city: any = "";
      zipCode: any= "";
      phone=0;
      province="";

      bookingDetsList:any;

  ngOnInit(): void {
    this.bookingDetsList =  this.authService.getbookingDets();;
  }
  
  displayUserProfile(){
    window.localStorage.getItem(this.checkIn());
    window.localStorage.getItem('pCheckOut');
    window.localStorage.getItem( this.numAdults);
    window.localStorage.getItem(this.numKids);
    window.localStorage.getItem(this.fname);
    window.localStorage.getItem(this.lname);
    window.localStorage.getItem( this.email);
    window.localStorage.getItem( this.cellphone);
    window.localStorage.getItem(this.city);
    window.localStorage.getItem( this.province);
    window.localStorage.getItem(this.zipCode);

    window.location.href="log-in";

    // this.authService.bookingDets();


  }

}
