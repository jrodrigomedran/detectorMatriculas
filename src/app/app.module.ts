import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component'
import { AppRoutingModule, routingComponents } from './app.routing'
import { AppBoostrapModule } from './app-boostrap/app-boostrap.module';
import { AppComponent } from './app.component';
import { InfraccionService } from '../service/infraccion.service';
import { ListaInfraccionesComponent } from '../app/tarjeta-infraccion/lista-infracciones.component';
import { TarjetaInfraccionComponent } from '../app/tarjeta-infraccion/tarjeta-infraccion.component';
import { InfraccionComponent } from '../app/infraccion/infraccion.component';
import { OverlayCargandoComponent } from '../app/cargando/overlay-cargando.component';

const appComponents = [
  ListaInfraccionesComponent,
  TarjetaInfraccionComponent,
  OverlayCargandoComponent,
  InfraccionComponent
]

@NgModule({
  declarations: [    
    AppComponent,
    InicioComponent,
    routingComponents,
    appComponents
  ],
  imports: [
    BrowserModule, 
    AppBoostrapModule,
    AppRoutingModule
  ],
  providers: [InfraccionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
