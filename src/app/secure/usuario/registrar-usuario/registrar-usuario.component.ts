import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estado } from 'src/app/Models/Estado';
import { TipoDocumento } from 'src/app/Models/TipoDocumento';
import { Usuario } from 'src/app/Models/Usuario';
import { Rol } from 'src/app/Models/rol';
import { EstadoService } from 'src/app/services/estado.service';
import { RolService } from 'src/app/services/rol.service';
import { TipoDocumentoService } from 'src/app/services/tipo-documento.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  usuario: Usuario;
  id: number;
  lstRoles: Rol[];
  lstTiposDocumento: TipoDocumento[];
  lstEstados: Estado[];
  isLoading: boolean = true;
  mensajeSatisfactorio: string = 'Satisfactorio';

  constructor(
    private usuarioService: UsuarioService,
    private tipoDocumentoService: TipoDocumentoService,
    private roleService: RolService,
    private estadoService: EstadoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.listarTiposDocumento();
    this.listarRoles();
    this.listarEstados();
  }

  listarTiposDocumento() {
    this.tipoDocumentoService.getTipoDocumento().subscribe(data => {
      this.lstTiposDocumento = data;
      console.log("lstTiposDocumento", this.lstTiposDocumento);
    })
  }

  listarRoles() {
    this.roleService.getRol().subscribe(data => {
      this.lstRoles = data;
    })
  }

  listarEstados() {
    this.estadoService.getEstado().subscribe(data => {
      this.lstEstados = data;
    })
  }

  guardarCambios() {
    let usuario: Usuario = new Usuario();
    let tipoDocumento: TipoDocumento = new TipoDocumento(); 7
    let rol: Rol = new Rol();
    let estado: Estado = new Estado();

    usuario.usu_nombre = $('#nombre').val();
    usuario.usu_apellido = $('#apellido').val();
    usuario.usu_documento = $('#documento').val();
    usuario.usu_email = $('#email').val();
    usuario.usu_password = $('#password').val();

    tipoDocumento.tid_id = $('#tipoDocumento').val();
    usuario.tipo_documento = tipoDocumento;
    rol.rol_id = $('#rol').val();
    usuario.rol = rol;
    estado.est_id = $('#estado').val();
    usuario.estado = estado;

    if (usuario.usu_password != $('#confirmPassword').val()) {
      Swal.fire({
        title: 'Las contraseñas son distintas',
        icon: 'warning',
      })
    } else {
      this.crear(usuario);
    }

  }
  crear(usuario: Usuario): void {
    this.usuarioService.crearUsuario(usuario).subscribe(data => {
      console.log(data);
      $('#form input, #form textarea, #form select').val('');
      this.router.navigateByUrl('/dashboard/listarLocal');
    }, err => console.error(err));
  }
}
