import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Paises } from 'src/app/interfaces/paises';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  todosLosPaises:Paises[] = [];
  constructor(private servPaises:PaisesService,private http:HttpClient) { 

  }

  ngOnInit(): void {
    this.cargarPaises();
  }
  cargarPaises(){
    this.servPaises.todos().subscribe(
      paises=>{
        //console.log(paises);
        this.todosLosPaises=paises;
      });
  }
}
