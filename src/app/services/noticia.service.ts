import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { global } from '../global/global';
import 'rxjs/add/operator/map';

@Injectable()
export class NoticiaService {
  public url: string;
  private headers= new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  private token = "Bearer "+localStorage.getItem('token').replace(/['"]+/g, '');

  constructor(private _http: Http) {
    this.url = global.url;
  }
   
  getNoticias(){
    return this._http.get(this.url + 'api/post',{headers: this.headers})
                    .map(res => res.json());
  }

  getNoticia(id){
    return this._http.get(this.url + 'api/post/'+id,{headers: this.headers})
                    .map(res => res.json());
  }

  newPost(comment){
    this.headers.set('Authorization',this.token);
    return this._http.post(this.url + 'api/post/new',comment,{headers: this.headers})
                    .map(res => res.json());
  }
}
