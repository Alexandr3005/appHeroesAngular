import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
 // pure: false   //Cada vez que cambia de ciclo, se lanza el pipe(muchas veces)
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {

    if( !heroe.id && !heroe.alt_img){                        //Si no tiene id o si no se ha actualizado -- carga imagen de no-image
      return 'assets/no-image.png'
    } else if(heroe.alt_img) {
      return heroe.alt_img

    } else {

      return `assets/heroes/${heroe.id}.jpg`;  // La imagen se llama como el id 
    }

  }

}
