import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  lists:any;
  user:any;
  roomData:any;
  
  constructor(private auth:AuthService, public afAuth: AngularFireAuth) { 
    // this.auth.afAuth.currentUser.getIdToken();
    // this.user = afAuth.authState;
    
  }
  roomsInfoList : any;
  ngOnInit(): void {
    this.roomsInfoList =  this.auth.getRoomsInfo();
    
  }
  confirmBooking( roomName:any, roomPrice:any){

    window.localStorage.setItem('roomName', roomName);
    window.localStorage.setItem('bookingPrice', roomPrice);

    this.auth.addInfotoDatabase();

    // this.auth.displayroomInfo();
    
   window.location.href="payment";

    // const roomDetails = {roomName:roomName, roomPrice:roomPrice};
    
    // alert(roomName);
  }

displayroomInfo(){

}
  imgCollection = [
    {
      image: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Flodge-a5824.appspot.com%2Fo%2Fbackground.jpg%3Falt%3Dmedia%26token%3Ddb413478-454b-4e75-89b7-926f54592187',
      thumbImage: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Flodge-a5824.appspot.com%2Fo%2Fbackground.jpg%3Falt%3Dmedia%26token%3Ddb413478-454b-4e75-89b7-926f54592187'
      // [imageSize]: {height: '100%', weight: '100%', space:3}
    }, {
      image: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Flodge-a5824.appspot.com%2Fo%2Fbungalow.jpg%3Falt%3Dmedia%26token%3Dbed16b12-5e9d-4ddc-9e71-88858cf987b1',
      thumbImage: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Flodge-a5824.appspot.com%2Fo%2Fbungalow.jpg%3Falt%3Dmedia%26token%3Dbed16b12-5e9d-4ddc-9e71-88858cf987b1'
    }, {
      image: 'https://wallpaperaccess.com/full/2690549.jpg',
      thumbImage: 'https://wallpaperaccess.com/full/2690549.jpg'
    }, {
      image: 'https://www.thaiembassy.com/wp-content/uploads/2021/06/sha-plus-hotels-in-phuket-1280x720-1.jpg',
      thumbImage: 'https://www.thaiembassy.com/wp-content/uploads/2021/06/sha-plus-hotels-in-phuket-1280x720-1.jpg'
    }, {
      image: 'https://cst-media3.viomassl.com/3940/324702/1024x768s',
      thumbImage: 'https://cst-media3.viomassl.com/3940/324702/1024x768s'
    }
];


}
