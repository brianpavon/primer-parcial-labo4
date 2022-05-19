import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Actor } from '../clases/actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {
  
  itemsCollection!: AngularFirestoreCollection<Actor>;
  todosLosActores!: Observable<Actor[]>;
  constructor(private firestore:AngularFirestore) {    
  }

  guardarActor(nuevoActor:Actor){
    this.firestore.collection('actores').add(nuevoActor);
  }
  
  devolverActores(){
    this.itemsCollection = this.firestore.collection<Actor>('actores');
    return this.todosLosActores = this.itemsCollection.valueChanges();
  }
}
