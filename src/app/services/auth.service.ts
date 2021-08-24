import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';
import { auth } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState:any= null;

  constructor(private afu:AngularFireAuth, private router:Router, public ngZone: NgZone ) { 
   // this.afu.authState.subscribe((auth => {this.authState = auth}))
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
}

