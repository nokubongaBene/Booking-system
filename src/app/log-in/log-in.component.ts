import { Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  userEmail:any="";
  email:any="";
  password:any="";
  errorMessage:any="";
  error:{name:string, message:string} = {name:"", message:""};
  
   constructor(private authService:AuthService, private router:Router) {
    
       };

  ngOnInit(): void {

  }
  clearErrorMess(){
    this.errorMessage = " ";
    this.error = {name: "", message:""};
  }
  login() {
  this.validateForm(this.userEmail,this.password)
  //.then(()=>)){
  // {
  //   this.router.navigate(['/home']);
  // }).catch((_error:any)=>{
  //   this.error = _error;
  //   this.router.navigate(['/log-in']);
  // })
  
   }
   
  validateForm(userEmail:any, password:any){
    console.log("hi");
    if(this.userEmail.length == 0){
      this.errorMessage = "Please enter email address.";
    }
    if(this.password.length == 0){
      this.errorMessage = "Please enter your password.";
    }
    if(this.password.length < 6){
      this.errorMessage = "Your password is too short.";
    }else{
       this.authService.loginUserEmail(this.email, this.password)
       this.router.navigate(['/home']);
    }
  }
  }
