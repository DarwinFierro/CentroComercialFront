import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarUsuarioRoutingModule } from './editar-usuario-routing.module';
import { EditarUsuarioComponent } from './editar-usuario.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditarUsuarioComponent
  ],
  imports: [
    CommonModule,
    EditarUsuarioRoutingModule,
    ReactiveFormsModule
  ]
})
export class EditarUsuarioModule { }
