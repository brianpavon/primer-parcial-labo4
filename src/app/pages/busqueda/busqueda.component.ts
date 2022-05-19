import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/peliculas/pelicula';
import { ImagenService } from 'src/app/services/imagen.service';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  //listaPeliculasBusqueda : Pelicula[];
  peliculaParaMostrar!: Pelicula;
  mostrarDetalle:boolean = false;
  pelisFirestore:Pelicula[]= [];

  constructor(private servPelis:PeliculasService, private servImg:ImagenService) { 
    
    /*this.listaPeliculasBusqueda = [
      {id:1,nombre:'Top Gun',tipo:'Accion',fechaDeEstreno:'09/10/1986',cantidadDePublico:500000,fotoDePelicula:'assets/images/topgun.jfif',actor:'Tom Cruise'},
      {id:2,nombre:'Iron Man',tipo:'Accion',fechaDeEstreno:'02/05/2008',cantidadDePublico:1500000,fotoDePelicula:'assets/images/ironman.jfif',actor:'Robert Downy Jr'},
      {id:3,nombre:'Volver al futuro',tipo:'Fantasia',fechaDeEstreno:'26/12/1985',cantidadDePublico:555000,fotoDePelicula:'assets/images/volverfuturo.jfif',actor:'Marty Mc Fly'},
      {id:4,nombre:'Forrest Gump',tipo:'Drama',fechaDeEstreno:'06/10/1994',cantidadDePublico:200000,fotoDePelicula:'assets/images/forrestgump.jfif',actor:'Tom Hanks'},
    ]*/
    //this.peliculaParaMostrar = new Pelicula(0,'','','',0,'');
  }

  ngOnInit(): void {
    this.traerPeliculas();
  }
  peliculaParaDetalle(peli: Pelicula){
    this.peliculaParaMostrar = peli;
    this.mostrarDetalle = true;
  }
  limpiarDetalle(){
    this.mostrarDetalle = false;
  }

  traerPeliculas(){
    this.servPelis.traerPeliculas().subscribe(
      pelis=>{
        this.pelisFirestore = pelis;
        //console.log(this.pelisFirestore);
        
        this.pelisFirestore.forEach(element => {
          this.servImg.descargarImagen(element.fotoDePelicula).subscribe(
            url=>{
              //console.log(url);
              element.fotoDePelicula = url;
            }
          )
        });
      }
    )
    
  }
}
