import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

//import { NavComponent } from './navbar/navbar.component';
//import { LoginComponent } from './login/login.component';
//import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent
  //  NavComponent,
    //LoginComponent,
  //  RegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [

  ]
})


export class AppModule { }
