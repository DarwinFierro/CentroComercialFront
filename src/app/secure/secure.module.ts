import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SecureComponent } from './secure.component';
import { AuthGuard } from '../auth.guard';
import { EmptyComponent } from './empty/empty.component';

const secureRoutes: Routes = [
  {
    path: 'dashboard',
    component: SecureComponent,
    children: [
      {
        path: 'listarUsuario',
        loadChildren: () => import('./usuario/listado-usuario/listado-usuario.module').then(m => m.ListadoUsuarioModule),
        canActivate: [AuthGuard], data: { allowedRoles: ['SUPER_OWNER'] }
      },
      {
        path: 'registrarUsuario',
        loadChildren: () => import('./usuario/registrar-usuario/registrar-usuario.module').then(m => m.RegistrarUsuarioModule),
        canActivate: [AuthGuard], data: { allowedRoles: ['SUPER_OWNER'] }
      },
      {
        path: 'editarUsuario/:id',
        loadChildren: () => import('./usuario/editar-usuario/editar-usuario.module').then(m => m.EditarUsuarioModule),
        canActivate: [AuthGuard], data: { allowedRoles: ['SUPER_OWNER'] }
      },
      {
        path: 'listarLocal', loadChildren: () => import('./local/listar-local/listar-local.module').then(m => m.ListarLocalModule),
        canActivate: [AuthGuard], data: { allowedRoles: ['SUPER_OWNER', 'LOCAL_OWNER', 'WATCHMAN'] }
      },
      {
        path: 'registrarLocal',
        loadChildren: () => import('./local/registrar-local/registrar-local.module').then(m => m.RegistrarLocalModule),
        canActivate: [AuthGuard], data: { allowedRoles: ['SUPER_OWNER'] }
      },
      {
        path: 'editarLocal/:id', loadChildren: () => import('./local/editar-local/editar-local.module').then(m => m.EditarLocalModule),
        canActivate: [AuthGuard], data: { allowedRoles: ['SUPER_OWNER', 'LOCAL_OWNER'] }
      },
      { path: '**', component: EmptyComponent },
    ]
  }
];

@NgModule({
  declarations: [SecureComponent, EmptyComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(secureRoutes),
    RouterModule
  ],
  providers: [AuthGuard]
})
export class SecureModule { }
