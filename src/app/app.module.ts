import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }  from '@angular/forms';

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { NavComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BartService } from './bart_service/bart.service';
import { StationComponent } from './stationlist/stationlist.component';
import { StationInfoComponent } from './stationinfo/stationinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    StationComponent,
    StationInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BartService],
  bootstrap: [AppComponent],
  schemas: [

  ]
})


export class AppModule { }
