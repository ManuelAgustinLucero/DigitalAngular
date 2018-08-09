import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../../services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
  providers: [NoticiaService]

})
export class NoticiasComponent implements OnInit {

  constructor(
    private _NoticiaService: NoticiaService,

  ) { }

  ngOnInit() {
    this.Noticias();
  }


  public Noticias() {
    this._NoticiaService.getNoticias().subscribe(
      response => {
          console.log(response);
      },
      error => {
        // Manejar errores
      }
    );
  }
}
