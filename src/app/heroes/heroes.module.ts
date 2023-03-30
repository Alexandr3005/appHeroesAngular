import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';

import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module'; //Todo lo que se exporte en el modulo MaterialModule, viene a este
import { AgregarComponent } from './pages/agregar/agregar.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { FormsModule } from '@angular/forms';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';


@NgModule({
  declarations: [
    HomeComponent,    //Declarar los componentes que se van a usar
    ListadoComponent,
    AgregarComponent,
    ListadoComponent,
    BuscarComponent,
    HeroeTarjetaComponent,
    HeroeComponent,
    ImagenPipe,
    ConfirmarComponent,
    
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MaterialModule,
    FormsModule
    
  ],

  exports: [
   
  ]
 

})
export class HeroesModule { }


