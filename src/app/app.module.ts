import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';
import { FormsModule } from '@angular/forms';
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayInfoComponent } from './display-info/display-info.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {LogInComponent} from './log-in/log-in.component';
import { BookingComponent } from './booking/booking.component'


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DisplayInfoComponent,
    RegisterComponent,
    UserProfileComponent,
    LogInComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    NgImageSliderModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
