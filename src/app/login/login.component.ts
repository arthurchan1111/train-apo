import { Component } from '@angular/core';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls:['./login.scss']
})

export class LoginComponent{
private access_token: any = Math.random().toString(36);



}
