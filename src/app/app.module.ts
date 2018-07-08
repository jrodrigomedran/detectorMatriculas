import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component'
import { AppRoutingModule, routingComponents } from './app.routing'
import { AppBoostrapModule } from './app-boostrap/app-boostrap.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [    
    AppComponent,
    InicioComponent,
    routingComponents
  ],
  imports: [
    BrowserModule, 
    AppBoostrapModule,
     AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
