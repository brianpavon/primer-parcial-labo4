import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from 'src/app/clases/actor';
import { ActoresService } from 'src/app/services/actores.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {
  listaActores:Actor[] = [];
  //listaActores!:Observable<Actor[]>;
  constructor(private servActores:ActoresService) {

  }

  ngOnInit(): void {
    this.cargarActores();
  }

  cargarActores(){
    this.servActores.devolverActores().subscribe(
      actores=>{
        console.log(actores);
        this.listaActores=actores;
        //console.log(this.listaActores);
      });
  }

}
