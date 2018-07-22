import { Component, Input, OnInit } from '@angular/core';
import { InfraccionService } from '../../service/infraccion.service';
import { Infraccion } from '../../model/Infraccion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-infraccion',
  templateUrl: './tarjeta-infraccion.component.html'
})
export class TarjetaInfraccionComponent implements OnInit {

    @Input()
    infraccion: Infraccion;
    imagen: string;
    constructor(){}

    ngOnInit() {
        this.imagen = this.infraccion.urlFoto;//+'/MATRICULA_'+this.infraccion.matricula;
    }
}
