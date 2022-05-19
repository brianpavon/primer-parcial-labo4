import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './pages/peliculas/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './pages/actor/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './pages/actor/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './pages/peliculas/pelicula-listado/pelicula-listado.component';
import { TablaPeliculaComponent } from './pages/peliculas/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './pages/peliculas/detalle-pelicula/detalle-pelicula.component';
import { MenuPrincipalComponent } from './pages/menu-principal/menu-principal.component';
import { FooterComponent } from './pages/footer/footer.component';
import { TablaPaisesComponent } from './pages/tabla-paises/tabla-paises.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';


@NgModule({
  declarations: [
    AppComponent,    
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    MenuPrincipalComponent,
    FooterComponent,
    TablaPaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
