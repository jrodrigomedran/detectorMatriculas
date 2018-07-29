import { Component, Input, OnInit } from '@angular/core';
import { InfraccionService } from '../../service/infraccion.service';
import { Infraccion } from '../../model/Infraccion';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tarjeta-infraccion',
  templateUrl: './tarjeta-infraccion.component.html'
})
export class TarjetaInfraccionComponent implements OnInit {

    @Input()
    infraccion: Infraccion;
    imagen: string;
    constructor(public sanitizer: DomSanitizer){}

    ngOnInit() {
        //this.imagen = this.infraccion.urlFoto;//+'/MATRICULA_'+this.infraccion.matricula;
        this.imagen = this.infraccion.urlFoto;
    }
}
