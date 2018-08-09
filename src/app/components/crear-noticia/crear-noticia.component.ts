import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../models/noticia';
import { NoticiaService } from '../../services/noticia.service';

@Component({
  selector: 'app-crear-noticia',
  templateUrl: './crear-noticia.component.html',
  styleUrls: ['./crear-noticia.component.css'],
  providers: [NoticiaService]

})
export class CrearNoticiaComponent implements OnInit {

  constructor(
    private _NoticiaService: NoticiaService,

  ) { }
  public first:boolean;
  public second:boolean;
  public notica: Noticia;
  ngOnInit() {
    this.notica= new Noticia(1,"","","","","",0,1,1);
    // this.first=true;
    this.first=false;
    this.second=true;
  }
  OnClickNext(){
    this.first=false;
    this.second=true;

  }
  onPost(){
    console.log(this.notica);
    this._NoticiaService.newPost(this.notica).subscribe(
      response => {
        console.log(response);

      },
      error => {
      }
    );
  }
  onChangeCard(cardId){
    this.notica.card=cardId;
    console.log(this.notica);

  }
	public filesToUpload: Array<File>;

  saverange(event){
    console.log(event.target.files);
    this.notica.image=event.target.files;

  }
}
