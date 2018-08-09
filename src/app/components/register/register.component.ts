import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [LoginService]

})
export class RegisterComponent implements OnInit {

  constructor(
    private _LoginService: LoginService,

  ) { }
  public user={"username":"","email":"","password":"","secondPassword":""};

  ngOnInit() {
    var element = document.getElementById("body");
    element.classList.remove("index-page")
  }

  onRegister(){    
    if(this.user.password==this.user.secondPassword){
      this._LoginService.postRegister(this.user).subscribe(
        response => {
          localStorage.setItem('token', JSON.stringify(response.toke));
        },
        error => {
          console.log("manuel");
        }
      );
    }
    else{

    }

  }
}
