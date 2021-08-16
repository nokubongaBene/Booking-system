import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-info',
  templateUrl: './display-info.component.html',
  styleUrls: ['./display-info.component.css']
})
export class DisplayInfoComponent implements OnInit {

  fname: any =window.localStorage.getItem('pFirstname');
  lname: any = window.localStorage.getItem('pLname');
  constructor() { }

  ngOnInit(): void {
  }
  saveBooking(){
    alert("saved");
  }
 
}
