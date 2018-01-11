import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
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
    NativeScriptModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
      NO_ERRORS_SCHEMA
  ]
})


export class AppModule { }
