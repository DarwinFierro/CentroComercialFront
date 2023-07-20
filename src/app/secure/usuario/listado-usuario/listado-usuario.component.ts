import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listado-usuario',
  templateUrl: './listado-usuario.component.html',
  styleUrls: ['./listado-usuario.component.css']
})
export class ListadoUsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];
  isLoading: boolean = true;

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.usuarioService.getUsuario().subscribe(data => {
      this.usuarios = data;
      this.isLoading = false; // Cambia el valor de isLoading una vez se carguen los datos
    });
  }

  eliminarUsuario(usuario: Usuario) {
    console.log('Eliminar usuario:', usuario);
  }

}
