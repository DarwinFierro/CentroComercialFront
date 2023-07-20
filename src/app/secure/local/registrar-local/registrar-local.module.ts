import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarLocalRoutingModule } from './registrar-local-routing.module';
import { RegistrarLocalComponent } from './registrar-local.component';


@NgModule({
  declarations: [
    RegistrarLocalComponent
  ],
  imports: [
    CommonModule,
    RegistrarLocalRoutingModule
  ]
})
export class RegistrarLocalModule { }
