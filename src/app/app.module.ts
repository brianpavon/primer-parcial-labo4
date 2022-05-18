import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './pages/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './pages/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './pages/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './pages/pelicula-listado/pelicula-listado.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
