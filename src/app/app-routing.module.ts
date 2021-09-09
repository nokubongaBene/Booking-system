import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaymentComponent } from './payment/payment.component';
import {HomeComponent} from './home/home.component';
import {DisplayInfoComponent} from './display-info/display-info.component';
import {LogInComponent } from './log-in/log-in.component';
import {RegisterComponent} from './register/register.component';
import {BookingComponent} from './booking/booking.component';

const routes: Routes = [

  {path: '', component: LogInComponent},
  {path: 'log-in', component:LogInComponent},
  {path: 'home', component: HomeComponent},
  {path: 'booking', component:BookingComponent},
  {path: 'payment', component:PaymentComponent},
  {path: 'display-info', component: DisplayInfoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PaymentComponent,HomeComponent, DisplayInfoComponent]
