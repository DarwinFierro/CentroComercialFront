import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoUsuarioRoutingModule } from './listado-usuario-routing.module';
import { ListadoUsuarioComponent } from './listado-usuario.component';

@NgModule({
  declarations: [
    ListadoUsuarioComponent
  ],
  imports: [
    CommonModule,
    ListadoUsuarioRoutingModule
  ]
})
export class ListadoUsuarioModule { }
