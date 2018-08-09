import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { global } from '../global/global';
import 'rxjs/add/operator/map';

@Injectable()
export class ComentarioService {

  public url: string;
  private headers= new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  private token = "Bearer "+localStorage.getItem('token').replace(/['"]+/g, '');

  constructor(private _http: Http) {
    this.url = global.url;
  }
   
  getComentario(id){
    return this._http.get(this.url + 'api/comment/post/'+id,{headers: this.headers})
                    .map(res => res.json());
  }

  postComment(comment){
    this.headers.set('Authorization',this.token)
    return this._http.post(this.url + 'api/comment/new',comment,{headers: this.headers})
                    .map(res => res.json());
  }
  deleteComment(id){
    this.headers.set('Authorization',this.token)
    return this._http.delete(this.url + 'api/comment/'+id,{headers: this.headers})
                    .map(res => res.json());
  }
}
