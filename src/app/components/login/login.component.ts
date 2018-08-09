import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

declare const $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]

})
export class LoginComponent implements OnInit {

  constructor(
    private _LoginService: LoginService,

  ) { }
  public user={"username":"","password":""};
  ngOnInit() {
    var element = document.getElementById("body");
    element.classList.remove("index-page")
  }
  onLogin(){
    this._LoginService.postLogin(this.user.username,this.user.password).subscribe(
      response => {
        localStorage.setItem('token', JSON.stringify(response.token));
      },
      error => {
        console.log("manuel");
      }
    );
  }

}
