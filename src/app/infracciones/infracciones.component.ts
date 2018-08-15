import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Infraccion } from '../../model/Infraccion';
import { InfraccionService } from '../../service/infraccion.service';
import { FiltroInfractor } from '../../service/api/schema/FiltroInfractor';

@Component({
  selector: 'infracciones',
  templateUrl: './infracciones.component.html'
})
export class InfraccionesComponent {

  infracciones: Infraccion[] = [];
  filtros: FiltroInfractor = new FiltroInfractor();
  timerFiltros: any;

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

  filtrar(){
    if(this.timerFiltros != null){
      clearTimeout(this.timerFiltros);
      this.timerFiltros = null;
    }
    /**
     * Con timeout retrasamos la ejecución del filtro 500 milisegundos
     * Esto es util porque como detectamos cada tecla que pulsa esperamos a que termine de escribir una palabra
     * Si se pulsa una letra en menos de 500 ms cancelamos la ejecucion retardada 
     * y volvemos a ejecutar el filtro con el mismo retardo
     */
    this.timerFiltros = setTimeout(() => {
        console.log("filtros: " + this.filtros.dni);
        if(this.filtros.dni != "")
        {
          this.infraccionService.fetchFilter(this.filtros.dni).subscribe(
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
          if(this.infracciones.length == 0)
          {
            alert("No se encuentran coincidencias con su búsqueda");
          }
        }
        else
        {
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
    }, 500);
  }


}