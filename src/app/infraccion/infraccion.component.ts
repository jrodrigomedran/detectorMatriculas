import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfraccionService } from '../../service/infraccion.service';
import { Infraccion } from '../../model/Infraccion';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'infraccion',
  templateUrl: './infraccion.component.html'
})
export class InfraccionComponent implements OnInit{

  infraccion: Infraccion = null;
  url : string;

  constructor(
    private infraccionService: InfraccionService,
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.matricula != null)
        this.cargarInfraccion(params['matricula'])
    });
  }

  cargarInfraccion(matricula: string) {
    /*this.infraccionService.fetchInfraccion(matricula).then((infraccion: Infraccion) => {
      this.infraccion = infraccion;
    });*/
    this.infraccionService.fetchInfraccion(matricula).subscribe(
      result => {
        if(result.code != 200){
          console.log(result);
          this.infraccion = result;
          this.url = this.infraccion.urlFoto;
        }else{
          console.log("code igual a 200");
        }
    },
    error => {
      console.log("entra en error");
      console.log(<any>error);
    }
  );
  }
}