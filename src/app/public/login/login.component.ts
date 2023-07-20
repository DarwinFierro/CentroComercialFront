import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

declare var $: any; // Debes asegurarte de tener jQuery incluido en tu proyecto

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    const usu_nombre = localStorage.getItem('usu_nombre');
    if (usu_nombre) {
      this.router.navigateByUrl('/dashboard/listarLocal');
    }
  }

  login() {
    const usu_email = $('#usu_email').val();
    const usu_password = $('#usu_password').val();

    const credentials = {
      usu_email: usu_email,
      usu_password: usu_password
    };

    this.usuarioService.login(credentials).subscribe(
      (response) => {
        const user = response.user;
        localStorage.setItem('rol_name', user.rol_name);
        localStorage.setItem('usu_nombre', user.usu_nombre);
        this.router.navigateByUrl('/dashboard/listarLocal');
      },
      (error) => {
        // Manejar el error del inicio de sesión aquí
        console.error(error);
      }
    );
  }
}
