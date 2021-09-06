import { Component, OnInit, NgModule } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userEmail:any="";
  email:any="";
  password:any="";
  // confirmPassword:any="";
  errorMessage:any="";
  error:{name:string, message:string} = {name:" ", message:" "};

  constructor(private authService:AuthService, private router:Router) {

   };

  ngOnInit(): void {
  }
  clearErrorMess(){
    this.errorMessage = " ";
    this.error = {name: "", message:""};
  }
  register() {
    this.authService.registerEmail(this.email, this.password);
  //   if(this.validateForm(this.email,this.password)){
  //     this.authService.registerEmail(this.email, this.password).then(()=>
  //   {
  //     this.errorMessage = "You are registered.";
  //     this.router.navigate(['/home']);
  //   }).catch((_error:any)=>{
  //     this.error = _error;
  //     this.router.navigate(['/register']);
  //   }
  // })

}
  validateForm(email:any, password:any){
    this.errorMessage = "You are registered.";
    // if(email.length == 0){
    //   this.errorMessage = "Please enter email address.";
    //   return false;
    // }
    // if(password.length == 0){
    //   this.errorMessage = "Please enter your password.";
    //   return false;
    // }
    // if(password.length < 6){
    //   this.errorMessage = "Your password is too short.";
    //   return false;
    // }
    // if(confirmPassword.length == 0){
    //   this.errorMessage = "Please confirm your password.";
    //   return false;
    // }
    // if(password != confirmPassword){
    //   this.errorMessage = "Your passwords do not match";
    //   return false;
    // }
  //   this.errorMessage="";
  //   return true;
   }
}
