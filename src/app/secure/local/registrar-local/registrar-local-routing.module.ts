import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarLocalComponent } from './registrar-local.component';

const routes: Routes = [{ path: '', component: RegistrarLocalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrarLocalRoutingModule { }
