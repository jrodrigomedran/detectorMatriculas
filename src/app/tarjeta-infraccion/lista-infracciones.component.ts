import { Component } from '@angular/core';
import { InfraccionService } from '../../service/infraccion.service';
import { Infraccion } from '../../model/Infraccion';

@Component({
  selector: 'lista-infracciones',
  templateUrl: './lista-infracciones.component.html'
})
export class ListaInfraccionesComponent {

  infracciones: Infraccion[] = [];
  cargando:  boolean = true;

  constructor(
    private infraccionService: InfraccionService,
  ){
    this.infraccionService.fetchAll().then(infracciones=>this.mostrarInfracciones(infracciones));
  }

  private mostrarInfracciones(infracciones: Infraccion[]){
    console.log(infracciones);
    this.infracciones = infracciones;
    setTimeout(()=>{
      this.cargando = false;
    },1500);
  }

}
