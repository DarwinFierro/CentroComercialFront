import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarLocalComponent } from './editar-local.component';

const routes: Routes = [{ path: '', component: EditarLocalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarLocalRoutingModule { }
