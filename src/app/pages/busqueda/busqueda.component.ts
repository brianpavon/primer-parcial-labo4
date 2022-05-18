import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/peliculas/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  listaPeliculasBusqueda : Pelicula[];
  peliculaParaMostrar: Pelicula;
  constructor() { 
    
    this.listaPeliculasBusqueda = [
      {id:1,nombre:'Top Gun',tipo:'Accion',fechaDeEstreno:'09/10/1986',cantidadDePublico:500000,fotoDePelicula:'urlIMG'},
      {id:2,nombre:'Iron Man',tipo:'Accion',fechaDeEstreno:'02/05/2008',cantidadDePublico:1500000,fotoDePelicula:'urlIMG'},
      {id:3,nombre:'Volver al futuro',tipo:'Fantasia',fechaDeEstreno:'26/12/1985',cantidadDePublico:555000,fotoDePelicula:'urlIMG'},
      {id:4,nombre:'Forrest Gump',tipo:'Drama',fechaDeEstreno:'06/10/1994',cantidadDePublico:200000,fotoDePelicula:'urlIMG'},
    ]
    this.peliculaParaMostrar = new Pelicula(0,'','','',0,'');
  }

  ngOnInit(): void {
  }
  peliculaParaDetalle(peli: Pelicula){
    this.peliculaParaMostrar = peli;
    //console.log(peli);    
  }
}
