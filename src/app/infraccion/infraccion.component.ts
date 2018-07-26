import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfraccionService } from '../../service/infraccion.service';
import { Infraccion } from '../../model/Infraccion';

@Component({
  selector: 'infraccion',
  templateUrl: './infraccion.component.html'
})
export class InfraccionComponent implements OnInit{

  infraccion: Infraccion = null;

  constructor(
    private infraccionService: InfraccionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.matricula != null)
        this.cargarInfraccion(params['matricula'])
    });
  }

  cargarInfraccion(matricula: string) {
    this.infraccionService.fetchInfraccion(matricula).then((infraccion: Infraccion) => {
      this.infraccion = infraccion;
    });
  }
}