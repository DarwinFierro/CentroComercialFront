import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

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
      this.isLoading = false;
    });
  }

  eliminarUsuario(id: number) {
    this.usuarioService.deleteUsuario(id).subscribe(data => {
      console.log(data);
      
      Swal.fire({
        icon: 'success',
        title: 'Correcto',
        text: 'local Borrado Correctamente',
      })
      this.usuarioService.getUsuario().subscribe(data => {
        this.usuarios = data;
      });
    });
  }

}
