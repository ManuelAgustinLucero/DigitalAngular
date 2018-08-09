import { Injectable } from '@angular/core';
import { Http,Headers, URLSearchParams } from '@angular/http';
import { global } from '../global/global';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {

  public url: string;
  private headers= new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  private body= new URLSearchParams();
  constructor(private _http: Http) {
    this.url = global.url;
  }
   


  postLogin(username,password){
    this.body.set('username', username);
    this.body.set('password', password);
    return this._http.post(this.url + 'api/login_check',this.body,{headers: this.headers}).map(res => res.json());
                    
  }
  postRegister(user){
    this.body.set('username', user.username);
    this.body.set('password', user.password);
    this.body.set('email', user.email);

    return this._http.post(this.url + 'api/user/register',this.body,{headers: this.headers}).map(res => res.json());
                    
  }

 
}
