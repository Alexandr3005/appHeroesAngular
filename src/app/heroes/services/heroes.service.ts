import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Heroe } from '../interfaces/heroes.interface';


//Todas las llamadas al backend se hace desde el servicio

@Injectable({
  providedIn: 'root'   //Se importan de manera global en todos los elementos
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl; // development enviroment --> (http://localhost:3000/heroes)


  constructor(private http: HttpClient ) {  }


  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);         
  }

  getHeroePorId(id: string): Observable<Heroe>{
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);         //retorna observable por ID
  }
 
  //Para autocompletar una busqueda 
  getSugerencias( termino: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=6`);  //retorna si pones s, los datos con s (hasta 6 datos)
  }
  
  //Post ----- Enviar a la base de datos 

  agregarHeroe(heroe: Heroe): Observable<Heroe>{
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`, heroe);
  }

  actualizarHeroe( heroe: Heroe): Observable<Heroe>{
    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`, heroe);
  }

  borrarHeroe( id: string): Observable<Heroe>{
    return this.http.delete<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }







  
}
