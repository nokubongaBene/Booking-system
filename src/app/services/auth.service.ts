import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';
import { auth } from 'firebase/app';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { Observable } from 'rxjs';
//import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState:any= null;
  user:any = false;
  userID : any;
 // tutorials: Observable<any[]>;
 roomsInfoTable: AngularFireList<any>;

 bookingDets: AngularFireList<any>;

  constructor(private afu:AngularFireAuth, private router:Router, public ngZone: NgZone, private database:AngularFireDatabase ) { 

    this.afu.authState.subscribe(user =>{
       this.userID = user?.uid;
    })

    this.afu.idToken.subscribe(user =>{
      this.user=user;
    })
    //ref to roomsinfo table on firebase
    this.roomsInfoTable = this.database.list('roomsInfo');
   // this.afu.authState.subscribe((auth => {this.authState = auth}))
   this.bookingDets =  this.database.list('bookingDets');

   
  }
   showUser(){
      return this.user;
  }
 
  getRoomsInfo(): Observable<any> {
    //return rooms info table and listen to any changes
    return this.roomsInfoTable.valueChanges();
  }
  getbookingDets(): Observable<any> {
    console.log(this.userID);
    return this.bookingDets.valueChanges();
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
        rImage: "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
        rDescription: "These types of rooms are for business travellers. People or person who needs to prepare for their business meetings the following day. It is ideal for employers who are hosting meetings in our conference rooms to stay overnight."
      })
    }
    displayroomInfo(){
    //  Observable<any> roomRef  = this.database.object('roomsInfo/standardRoom').valueChanges();
     //console.log(this.tutorials);
    }
    bookingsInfoDatabase(checkIn:any, checkOut:any,numAdults:any, numKids:any, fname:any,lname:any,
      email:any, cellphone:any, address:any, city:any, province:any, zipCode:any){
      const bookingDetails = this.database.object("bookingDets/" +  this.userID)
      bookingDetails.set({
        bAdultGuest: numAdults,
        bKidGuest: numKids,
        bName : fname,
        bSurname: lname,
        bCheckIn : checkIn,
        bCheckOut : checkOut,
        bEmail: email,
        bcellnumber: cellphone,
        bAddress: address,
        bCity: city,
        bProvince : province,
        bZipcode: zipCode 
      })
    }
}

