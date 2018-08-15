import { Component, OnInit  } from '@angular/core';
import { InfraccionService } from '../../service/infraccion.service';
import { Infraccion } from '../../model/Infraccion';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
    //this.infraccionService.fetchAll().then(infracciones=>this.mostrarInfracciones(infracciones));
    this.infraccionService.fetchAll().subscribe(
        result => {
          if(result.code != 200){
            console.log(result);
            this.infracciones = result;
            setTimeout(()=>{
              this.cargando = false;
            },500);
          }else{
            console.log("code igual a 200");
          }
      },
      error => {
        console.log("Error");
        console.log(<any>error);
      }
    );
  }

  private mostrarInfracciones(infracciones: Infraccion[]){
    console.log(infracciones);
    this.infracciones = infracciones;
    setTimeout(()=>{
      this.cargando = false;
    },500);
  }

}
