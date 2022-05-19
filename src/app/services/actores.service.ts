import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Actor } from '../clases/actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {
  //nuevoActor!:Actor
  constructor(private firestore:AngularFirestore) {

  }

  guardarActor(nuevoActor:Actor){
    this.firestore.collection('actores').add(nuevoActor);
  }
}
