import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'listUser', loadChildren: () => import('./pages/usuario/listado-usuario/listado-usuario.module').then(m => m.ListadoUsuarioModule) }, 
  { path: 'registrarUsuario', loadChildren: () => import('./pages/usuario/registrar-usuario/registrar-usuario.module').then(m => m.RegistrarUsuarioModule) }, 
  { path: 'EditarUsuario/:id', loadChildren: () => import('./pages/usuario/editar-usuario/editar-usuario.module').then(m => m.EditarUsuarioModule) },
  { path: 'registrarLocal', loadChildren: () => import('./pages/local/registrar-local/registrar-local.module').then(m => m.RegistrarLocalModule) },
  { path: 'listarLocal', loadChildren: () => import('./pages/local/listar-local/listar-local.module').then(m => m.ListarLocalModule) },
  { path: 'editarLocal/:id', loadChildren: () => import('./pages/local/editar-local/editar-local.module').then(m => m.EditarLocalModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
