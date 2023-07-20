import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarUsuarioRoutingModule } from './registrar-usuario-routing.module';
import { RegistrarUsuarioComponent } from './registrar-usuario.component';


@NgModule({
  declarations: [
    RegistrarUsuarioComponent
  ],
  imports: [
    CommonModule,
    RegistrarUsuarioRoutingModule
  ]
})
export class RegistrarUsuarioModule { }
