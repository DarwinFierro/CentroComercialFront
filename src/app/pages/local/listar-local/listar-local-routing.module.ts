import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarLocalComponent } from './listar-local.component';

const routes: Routes = [{ path: '', component: ListarLocalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarLocalRoutingModule { }
