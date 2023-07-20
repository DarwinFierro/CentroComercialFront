import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoUsuarioComponent } from './listado-usuario.component';

const routes: Routes = [{ path: '', component: ListadoUsuarioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoUsuarioRoutingModule { }
