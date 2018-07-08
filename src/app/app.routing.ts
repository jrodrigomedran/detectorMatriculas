import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { InfraccionesComponent } from './infracciones/infracciones.component';

const routes: Routes = [
    { path: '', component: InicioComponent, children: [
        { path: 'infracciones', component: InfraccionesComponent},
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule { }
  
  export const routingComponents = [
    InicioComponent,
    InfraccionesComponent
  ];