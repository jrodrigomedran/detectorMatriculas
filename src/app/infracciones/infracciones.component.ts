import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Infraccion } from '../../model/Infraccion';
import { InfraccionService } from '../../service/infraccion.service';

@Component({
  selector: 'infracciones',
  templateUrl: './infracciones.component.html'
})
export class InfraccionesComponent {

  infracciones: Infraccion[] = [];

  constructor(
    private infraccionService: InfraccionService,
  ){
    this.infraccionService.fetchAll().subscribe(
        result => {
          if(result.code != 200){
            console.log(result);
            this.infracciones = result;
          }else{
            console.log("Code igual a 200");
          }
      },
      error => {
        console.log("Error");
        console.log(<any>error);
      }
    );
  }

}