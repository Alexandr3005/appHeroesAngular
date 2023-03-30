import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,   //Muestro el contenido de homeComp en todas las hijas 
    children: [                //rutas hijas 
      {path: 'listado', component: ListadoComponent},
      {path: 'agregar', component: AgregarComponent},      //Editar y agregar tienen la misma ruta, una vez agregado puedes editar 

      {path: 'editar/:id', component: AgregarComponent},
      {path: 'buscar', component: BuscarComponent},
      {path: ':id', component: HeroeComponent},
      {path: '**', redirectTo: 'listado'}
    
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    
  ],
  exports: [
    RouterModule
  ]           //Importante exportar, despues importar en heroesRouting
})
export class HeroesRoutingModule { }


