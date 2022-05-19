import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {
  nuevoActor!: Actor;
  listaActores:Actor[] = []
  formularioActor : FormGroup;

  constructor(private fb:FormBuilder) {
    this.formularioActor = this.fb.group({
      'nombre':['',[Validators.required, Validators.minLength(2)]],
      'apellido':['',[Validators.required, Validators.minLength(2)]],
      'edad':['',[Validators.required, Validators.min(12),Validators.max(99)]],
      'nacionalidad':['',[Validators.required]],
    })
   }

  ngOnInit(): void {
  }

  altaActor(){
    console.log('en el alta');
    console.log(this.formularioActor.value);
    
  }

}
