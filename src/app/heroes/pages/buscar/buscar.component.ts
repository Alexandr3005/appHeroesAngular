import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})


export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[]= [];
  heroeSeleccionado!: Heroe | undefined;    // ! -> es que type "confie en mi"  
constructor(private heroesService: HeroesService) {}
  ngOnInit(): void {
   
  }

    buscando(){
      this.heroesService.getSugerencias(this.termino.trim()).subscribe(heroes => this.heroes = heroes)
    }

    opcionSeleccionada(event:MatAutocompleteSelectedEvent){

      if(!event.option.value){           //Si value no tiene valor
        this.heroeSeleccionado = undefined;
        return
      }

        const heroe: Heroe = event.option.value;                //La opcion del select

        this.termino = heroe.superhero;
        this.heroesService.getHeroePorId(heroe.id!).subscribe(heroe => this.heroeSeleccionado = heroe)  //Siempre va a venir un valor
    }

}
