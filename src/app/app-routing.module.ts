import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecureComponent } from './secure/secure.component';
import { LoginComponent } from './public/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {
    path: 'dashboard',
    component:SecureComponent,
    loadChildren: () => import('./secure/secure.module').then(m => m.SecureModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
