import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-info',
  templateUrl: './display-info.component.html',
  styleUrls: ['./display-info.component.css']
})
export class DisplayInfoComponent implements OnInit {

  fname: any =window.localStorage.getItem('pFirstname');
  lname: any = window.localStorage.getItem('pLname');
  email: any = window.localStorage.getItem('pEmail');
  cellphone: any = window.localStorage.getItem('pcellphone');
  address: any = window.localStorage.getItem('pAddress');
  city: any = window.localStorage.getItem('pCity');
  province: any = window.localStorage.getItem('pProvince');
  zipCode: any = window.localStorage.getItem('pZipCode');

  
  constructor() { }

  ngOnInit(): void {
  }
  saveBooking(){
    alert("saved");
  }
 
}
