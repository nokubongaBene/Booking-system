import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  months= ['January', 'February', 'March',
  'April', 'May', 'June',
  'July', 'August', 'September',
   'October', 'November', 'December'];

   displayName=window.localStorage.getItem('roomName');
   totalCost=window.localStorage.getItem('bookingPrice');
   
  constructor() { }

  ngOnInit(): void {

  }

}
