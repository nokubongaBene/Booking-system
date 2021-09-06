import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';
import { auth } from 'firebase/app';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState:any= null;
 // tutorials: Observable<any[]>;
 roomsInfoTable: AngularFireList<any>;

  constructor(private afu:AngularFireAuth, private router:Router, public ngZone: NgZone, private database:AngularFireDatabase ) { 

    //ref to roomsinfo table on firebase
    this.roomsInfoTable = this.database.list('roomsInfo');
   // this.afu.authState.subscribe((auth => {this.authState = auth}))
  }
 
  getRoomsInfo(): Observable<any> {
    //return rooms info table and listen to any changes
    return this.roomsInfoTable.valueChanges();
  }
  
  registerEmail(email:any, password:any) {
    return this.afu.createUserWithEmailAndPassword(email, password)
      .then((result : any) => {
        this.ngZone.run(() => {
          this.router.navigate(['/home']);
        });;
      }).catch((error : any) => {
        window.alert(error.message)
      })
  }
  
    loginUserEmail(email:any, password:any){
      return this.afu.signInWithEmailAndPassword(email,password).then((user:any)=>{
        this.router.navigate(['/home']);
        this.authState = user;
      }).catch((error:any)=>
      {
        window.alert(error.message)
        console.log(error);
        throw error;
      })
    }
    signOut(): void {
      this.afu.signOut();
      this.router.navigate(['/log-in']);
    }
    get isUserAnonymousLoggedIn():boolean{
      return (this.authState != null) ? this.authState.isAnonymous: false;
    }
    get currentUserId(): string{
      return (this.authState != null) ? this.authState.uid:"";
    }
    get currentUserName(): string{
      return this.authState['email'];
    }
    get currentUser(): any{
      return (this.authState != null)? this.authState: null;
    }
    get isUserEmailLoggedIn(): boolean{
      if((this.authState != null) && (!this.authState.isUserAnonymousLoggedIn)){
        return true;
      }else{
        return false;
      }
    }

    addInfotoDatabase(){
      const roomRef = this.database.object("roomsInfo/standardRoom")
      roomRef.set({
        rprice : 1500,
        rname: "Standard Room",
        rImage: "https://firebasestorage.googleapis.com/v0/b/lodge-a5824.appspot.com/o/sentinel.jpg?alt=media&token=3b3fe0ae-0d01-4c54-a65d-0bc52adbd7d7",
        rDescription: "These types of rooms are for business travellers. People or person who needs to prepare for their business meetings the following day. It is ideal for employers who are hosting meetings in our conference rooms to stay overnight."
      })
    }
    displayroomInfo(){
    //  Observable<any> roomRef  = this.database.object('roomsInfo/standardRoom').valueChanges();
     //console.log(this.tutorials);
    }
    bookingsInfoDatabase(numAdultG:any, numKidsGuest:any, name:any,surname:any, email:any, checkInDate:any,checkOutdate:any, cellNumber:any,
                    address:any, city:any, province:any, zipCode:any){
      const bookingDetails = this.database.object("bookingDets/userID")
      bookingDetails.set({
        bAdultGuest: numAdultG,
        bKidGuest: numKidsGuest,
        bName : name,
        bSurname: surname,
        bCheckIn : checkInDate,
        bCheckOut : checkOutdate,
        bcellnumber: cellNumber,
        bAddress: address,
        bCity: city,
        bProvince : province,
        bZipcode: zipCode 
      })
    }
}

