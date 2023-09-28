import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TemplateComponent } from './template/template.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { BuscarComponent } from './paginas/buscar/buscar.component';
import { DatallesComponent } from './paginas/datalles/datalles.component';
import {HttpClientModule} from '@angular/common/http';
import {PeliApiService} from './service/peli-api.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TemplateComponent,
    InicioComponent,
    BuscarComponent,
    DatallesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PeliApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// explicacion del httpclient  http://blog.enriqueoriol.com/2017/11/httpclient-vs-http-angular.html
// http clientmodule https://angular.io/api/common/http/HttpClientModule