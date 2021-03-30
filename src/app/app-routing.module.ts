import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RegistroMecanicosComponent } from './registro-mecanicos/registro-mecanicos.component';
import { GestionVehiculosComponent } from './gestion-vehiculos/gestion-vehiculos.component';
import { GestionServiciosComponent } from './gestion-servicios/gestion-servicios.component';
import { GestionCotizacionComponent } from './gestion-cotizacion/gestion-cotizacion.component';


const routes: Routes = [

  { path: 'RegistroMecanicos', component: RegistroMecanicosComponent },
  { path: 'GestionVehiculos', component: GestionVehiculosComponent },
  { path: 'GestionServicios', component: GestionServiciosComponent },
  { path: 'GestionCotizacion', component: GestionCotizacionComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
