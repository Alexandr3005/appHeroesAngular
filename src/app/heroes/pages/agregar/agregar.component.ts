import { Component } from '@angular/core';
import { ActivatedRoute, Router, withDebugTracing } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators'
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },

    {
      id: 'Marvel Comics',
      desc: ' Marvel - Comics'
    }

  ]

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    publisher: Publisher.DCComics,
    first_appearance: '',
    alt_img: ''
  }

  constructor(private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router, private dialog: MatDialog
  ) { } //  

  // Rellena los campos de heroe con la informacion del back, por el id
  ngOnInit(): void {

    if (!this.router.url.includes('editar')) {
      return;                                      //Si la ruta incluye editar, no retorna el id 

    }

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroePorId(id)))
      .subscribe(heroe => this.heroe = heroe);        //objeto declarado igual al objeto que se recibe 

  }

  guardar() {
    if (this.heroe.superhero.trim().length === 0) {
      return;   //Si no coincide con el nombre, no devuelve nada 
    }

    if (this.heroe.id) {  //editar-actualizar

      this.heroesService.actualizarHeroe(this.heroe).subscribe(heroe => console.log('Actualizando', heroe))  //console.log('Actualizando', heroe )

    } else {
      this.heroesService.agregarHeroe(this.heroe).subscribe(heroe =>
        this.router.navigate(['/heroes/editar', heroe.id]));  //Metodos de get/post.. en el servicio
      // this.mostrarSnackbar('Registro creado')    
    }

  }


  borrar() {
    //Se crea un componente html para el dialog
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.heroe
    });

    dialog.afterClosed().subscribe(
      (resutl) => {
        if (resutl) {      // Despues de cerrar el dialog, se borra el elemento 

          this.heroesService.borrarHeroe(this.heroe.id!).subscribe(resp => {
            this.router.navigate([('/heroes')]);
          });

        }
      }
    )


  }

  //Borrar sin el dialog
  /*
  this.heroesService.borrarHeroe(this.heroe.id!).subscribe(resp => {
    this.router.navigate([('/heroes')]);
  } )

  */
}


  //De angular material -- como un alter  

/*
mostrarSnackbar(mensaje: string){
  this.snackBar.open(mensaje, 'Cerrar', 
  {duration: 2500})
}
*/

