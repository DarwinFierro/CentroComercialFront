import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const publicRoutes: Routes = [
  { path: '', component: LoginComponent },
];

@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(publicRoutes),
  ]
})
export class PublicModule { }
