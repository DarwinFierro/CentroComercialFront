import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarLocalRoutingModule } from './listar-local-routing.module';
import { ListarLocalComponent } from './listar-local.component';


@NgModule({
  declarations: [
    ListarLocalComponent
  ],
  imports: [
    CommonModule,
    ListarLocalRoutingModule
  ]
})
export class ListarLocalModule { }
