import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/peliculas/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {
  @Input() listaDePeliculas:Pelicula[] = [];
  @Output() peliculaSeleccionada: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  mostrarDetalles(paramPelicula:Pelicula){
    this.peliculaSeleccionada.emit(paramPelicula);
    console.log(paramPelicula);
    
  }

}
