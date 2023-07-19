import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarLocalRoutingModule } from './editar-local-routing.module';
import { EditarLocalComponent } from './editar-local.component';


@NgModule({
  declarations: [
    EditarLocalComponent
  ],
  imports: [
    CommonModule,
    EditarLocalRoutingModule
  ]
})
export class EditarLocalModule { }
