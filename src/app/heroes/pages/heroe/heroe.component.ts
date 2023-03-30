import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe!: Heroe;
    constructor(private activatedRoute: ActivatedRoute, 
      private heroesServices: HeroesService,
      private router: Router) {}  //Active route --- parametros de la ruta (/id)

 //Ir al heroe por id
    ngOnInit(): void{

      this.activatedRoute.params     // Parametros de la ruta 
      .pipe(                         //Con el pipe encadeno operadores
        switchMap( ({id}) => this.heroesServices.getHeroePorId(id) ))
       .subscribe(heroe  => this.heroe = heroe);
    }

    regresar(){
      this.router.navigate(['heroes/listado'])
    }

    
}
