
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent {

  constructor (private dialogRef: MatDialogRef<ConfirmarComponent>,
                @Inject(MAT_DIALOG_DATA) public data: Heroe){  //Necesario importar, con esto puedo usar los datos de la interfaz en el comp
             
  }

  ngOnInit():void{

  }

  borrar(){
    this.dialogRef.close(true); //con true, voy al metodo borrar en agregarComponent --- 
  }

  cerrar(){
    this.dialogRef.close();

  }

}
