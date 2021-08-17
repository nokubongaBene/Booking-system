import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaymentComponent } from './payment/payment.component';
import {HomeComponent} from './home/home.component';
import {DisplayInfoComponent} from './display-info/display-info.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  
  {path: 'payment', component:PaymentComponent},
  {path: 'home', component: HomeComponent},
  {path: 'display-info', component: DisplayInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PaymentComponent,HomeComponent, DisplayInfoComponent]
