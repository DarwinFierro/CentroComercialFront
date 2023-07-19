import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'listUser', loadChildren: () => import('./pages/usuario/listado-usuario/listado-usuario.module').then(m => m.ListadoUsuarioModule) }, 
  { path: 'registrarUsuario', loadChildren: () => import('./pages/usuario/registrar-usuario/registrar-usuario.module').then(m => m.RegistrarUsuarioModule) }, 
  { path: 'EditarUsuario/:id', loadChildren: () => import('./pages/usuario/editar-usuario/editar-usuario.module').then(m => m.EditarUsuarioModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
