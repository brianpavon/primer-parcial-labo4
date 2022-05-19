import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paises } from '../interfaces/paises';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  urlApi: string = 'https://restcountries.com/v3.1/subregion/south'
  constructor(private http:HttpClient) {

   }
   todos():Observable<Paises[]>{
     return this.http.get<Paises[]>(this.urlApi);
   }
}
