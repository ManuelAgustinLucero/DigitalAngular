import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CrearNoticiaComponent } from './components/crear-noticia/crear-noticia.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoticiasComponent,
    NoticiaComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
    CrearNoticiaComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
