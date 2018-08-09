import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { NoticiaService } from '../../services/noticia.service';
import { ComentarioService } from '../../services/comentario.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css'],
  providers: [NoticiaService,ComentarioService]

})
export class NoticiaComponent implements OnInit {
  public noticia:string[];
  public comentarios;
  public comentario={'comment':'','post':0,'user':1};

  constructor(
		private _route: ActivatedRoute,
    private _NoticiaService: NoticiaService,
    private _ComentarioService: ComentarioService,

  ) { }

  ngOnInit() {
    this._route.params.subscribe(params =>{
      let id = +params['id'];

      this.comentario.post = id;

      this.Noticia(id);
      this.Commentario(id);

		});
  }


  public Noticia(id) {
    this._NoticiaService.getNoticia(id).subscribe(
      response => {
        this.noticia=response;
      },
      error => {
        // Manejar errores
      }
    );
  }
  public Commentario(id) {
    this._ComentarioService.getComentario(id).subscribe(
      response => {
        this.comentarios=response;
        console.log(this.comentarios);
      },
      error => {
        // Manejar errores
      }
    );
  }

  onComment() {
    console.log(this.comentario);
    this._ComentarioService.postComment(this.comentario).subscribe(
      response => {
        console.log(response);
         this.comentario.comment="";

        this.comentarios.unshift(response);
      },
      error => {
      }
    );
  }

  public deleteComment(id){
      this._ComentarioService.deleteComment(id).subscribe(
        response => {
          for (let index = 0; index < this.comentarios.length; index++) {
            if (id == this.comentarios[index].id) {
              this.comentarios.splice(index, 1);
            }
          }
        },
        error => {
        }
      );
  }
}
