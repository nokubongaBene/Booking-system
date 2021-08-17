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

   provinces=['Gauteng', 'Mpumalanga', 'Free State',
              'North West', 'Western Cape', 'Limpopo',
            'Eastern Cape', 'KwaZulu-Natal', 'Nothern Cape'];

   phone=0;
   province="";
   expMonth="";

   displayName=window.localStorage.getItem('roomName');
   totalCost=window.localStorage.getItem('bookingPrice');

    checkIn: any = "";
    checkOut:any = "";
    numAdults:any= "";
    numKids: any = "";
   fname  : any = "";
   lname : any = "";
   email : any = "";
   cellphone: any = "";
   address: any = "";
   city: any = "";
   zipCode: any= "";
   
  constructor() { }

  ngOnInit(): void {

  }

  saveDetails(){

    if(this.checkIn==""){
      alert("Please choose check In date.");
    }else if(this.checkOut==""){
      alert("Enter Check Out date");
    }else if(this.numAdults==""){
      alert("Enter number of adult Guest(s)");
    }else if(this.numKids==""){
      alert("Enter number of kids");
    }else if(this.fname == ""){
      alert("Please enter your name");
    }else if(this.lname == ""){
      alert("Please enter your Last name.");
    }else if(this.email==""){
      alert("Please enter your email address.");
    }else if(this.cellphone == ""){
      alert("Please enter your cell phone number.");
    }else if(this.address==""){
      alert("Please enter your Address.");
    }else if(this.city==""){
      alert("Please enter the name of your residential City");
    }else if(this.province==""){
      alert("Please enter your province");
    }else if(this.zipCode==""){
      alert("Please enter the zip code.");
    }else {
      window.localStorage.setItem('pCheckIn', this.checkIn);
      window.localStorage.setItem('pCheckOut', this.checkOut);
      window.localStorage.setItem('pnumAdults', this.numAdults);
      window.localStorage.setItem('pnumKids', this.numKids);
      window.localStorage.setItem('pFirstname', this.fname);
      window.localStorage.setItem('pLname', this.lname);
      window.localStorage.setItem('pEmail', this.email);
      window.localStorage.setItem('pcellphone', this.cellphone);
      window.localStorage.setItem('pAddress', this.address);
      window.localStorage.setItem('pCity', this.city);
      window.localStorage.setItem('pProvince', this.province);
      window.localStorage.setItem('pZipCode', this.zipCode);
   
      window.location.href="display-info";
    }

  }


}
