import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from './pages/actor/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './pages/actor/actor-listado/actor-listado.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './pages/peliculas/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './pages/peliculas/pelicula-listado/pelicula-listado.component';

const routes: Routes = [  
  {path: 'bienvenido',redirectTo: 'busqueda',pathMatch: 'full'},
  {path: 'busqueda', component:BusquedaComponent},
  {path: 'peliculas/alta',component:PeliculaAltaComponent},
  {path: 'actor/alta', component:ActorAltaComponent},
  {path: 'actor/listado', component:ActorListadoComponent},
  {path:'peliculas/listado',component:PeliculaListadoComponent},
  {path:'',redirectTo:'busqueda',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
