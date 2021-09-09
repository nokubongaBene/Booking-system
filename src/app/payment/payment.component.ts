import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';


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
   
   expMonth="";

   displayName=window.localStorage.getItem('roomName');
   totalCost=window.localStorage.getItem('bookingPrice');

   
  constructor(private auth:AuthService) { }
  roomsInfoList : any;
  ngOnInit(): void {
    this.roomsInfoList =  this.auth.getRoomsInfo();
  }
  selectRoom(index:any){
    this.auth.displayroomInfo();
  
    this.roomsInfoList =this.roomsInfoList[index].rname;
    this.roomsInfoList = this.roomsInfoList[index].rprice;
    this.roomsInfoList = this.roomsInfoList[index].rDescription;
    this.roomsInfoList = this.roomsInfoList[index].rImage;
    console.log(index);
   }

 

}
