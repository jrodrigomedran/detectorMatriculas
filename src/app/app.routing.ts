import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { InfraccionesComponent } from './infracciones/infracciones.component';
import { ListaInfraccionesComponent } from '../app/tarjeta-infraccion/lista-infracciones.component';
import { InfraccionComponent } from './infraccion/infraccion.component';

const routes: Routes = [
    { path: '', component: InicioComponent, children: [
        { path: '', component: ListaInfraccionesComponent},
        { path: 'infracciones', component: InfraccionesComponent},
        //{ path: 'infracciones/:matricula', component: InfraccionComponent }
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule { }
  
  export const routingComponents = [
    InicioComponent,
    InfraccionesComponent,
    ListaInfraccionesComponent
  ];