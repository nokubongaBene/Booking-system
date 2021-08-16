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

   fname  : any = " ";
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
