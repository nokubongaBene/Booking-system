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
  roomDescription:any;
  roomImage:any;

  roomName= window.localStorage.getItem('rName');
  roomPrice:any = window.localStorage.getItem('rPrice');
  rDescription:any = window.localStorage.getItem('rDescription');
  rImage:any = window.localStorage.getItem('rImage');
   
  constructor(private auth:AuthService) { }
  roomsInfoList : any;
  ngOnInit(): void {
    this.roomsInfoList =  this.auth.getRoomsInfo();
  }
  selectRoom(){
    // this.auth.displayroomInfo();
    // this.roomsInfoList =this.roomsInfoList[index].rname;
    // this.roomsInfoList = this.roomsInfoList[index].rprice;
    // this.roomsInfoList = this.roomsInfoList[index].rDescription;
    // this.roomsInfoList = this.roomsInfoList[index].rImage;
    // console.log(index);

    this.roomsInfoList =  this.auth.getRoomsInfo();

    window.location.href="display-info";
   }

 

}
