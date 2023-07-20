import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SecureComponent } from './secure.component';

// Rutas hijas del módulo SecureModule
const secureRoutes: Routes = [
  { path: 'listarUsuario', loadChildren: () => import('./usuario/listado-usuario/listado-usuario.module').then(m => m.ListadoUsuarioModule) },
  { path: 'registrarUsuario', loadChildren: () => import('./usuario/registrar-usuario/registrar-usuario.module').then(m => m.RegistrarUsuarioModule) },
  { path: 'EditarUsuario/:id', loadChildren: () => import('./usuario/editar-usuario/editar-usuario.module').then(m => m.EditarUsuarioModule) },
  { path: 'listarLocal', loadChildren: () => import('./local/listar-local/listar-local.module').then(m => m.ListarLocalModule) },
  { path: 'registrarLocal', loadChildren: () => import('./local/registrar-local/registrar-local.module').then(m => m.RegistrarLocalModule) },
  { path: 'editarLocal/:id', loadChildren: () => import('./local/editar-local/editar-local.module').then(m => m.EditarLocalModule) },
];

@NgModule({
  declarations: [SecureComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(secureRoutes), // Agrega las rutas hijas del módulo SecureModule
  ]
})
export class SecureModule { }