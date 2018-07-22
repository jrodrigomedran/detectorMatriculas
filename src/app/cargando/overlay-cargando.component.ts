import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-overlay-cargando',
  templateUrl: './overlay-cargando.component.html'
})
export class OverlayCargandoComponent{

  @Input()
  cargando:boolean =  false;

  constructor() {}  
}