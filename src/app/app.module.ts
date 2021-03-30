import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RegistroMecanicosComponent } from './registro-mecanicos/registro-mecanicos.component';
import { GestionVehiculosComponent } from './gestion-vehiculos/gestion-vehiculos.component';
import { GestionServiciosComponent } from './gestion-servicios/gestion-servicios.component';
import { GestionCotizacionComponent } from './gestion-cotizacion/gestion-cotizacion.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    RegistroMecanicosComponent,
    GestionVehiculosComponent,
    GestionServiciosComponent,
    GestionCotizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
