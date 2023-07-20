import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/Models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { TipoDocumentoService } from 'src/app/services/tipo-documento.service';
import { Rol } from 'src/app/Models/rol';
import { TipoDocumento } from 'src/app/Models/TipoDocumento';
import { RolService } from 'src/app/services/rol.service';
import { EstadoService } from 'src/app/services/estado.service';
import { Estado } from 'src/app/Models/Estado';
import Swal from 'sweetalert2';


declare var $: any;

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuario: Usuario;
  id: number;
  lstRoles: Rol[];
  lstTiposDocumento: TipoDocumento[];
  lstEstados: Estado[];
  isLoading: boolean = true;
  mensajeSatisfactorio: string = 'Satisfactorio';

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private tipoDocumentoService: TipoDocumentoService,
    private roleService: RolService,
    private estadoService: EstadoService,
  ) { this.id = Number(this.route.snapshot.paramMap.get('id')) }

  ngOnInit(): void {
    this.listarTiposDocumento();
    this.listarRoles();
    this.listarEstados();
    this.obtenerUsuario(this.id);
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

  obtenerUsuario(id: number): void {
    this.usuarioService.getUsuarioPorId(id).subscribe(
      (data) => {
        this.usuario = data;
        this.isLoading = false;
        this.inicializarFormulario();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  inicializarFormulario(): void {
    const self = this;
    $(function () {
      console.log(self.usuario.usu_nombre);

      $('#nombre').val(self.usuario.usu_nombre);
      $('#apellido').val(self.usuario.usu_apellido);
      $('#documento').val(self.usuario.usu_documento);
      $('#email').val(self.usuario.usu_email);
      $('#tipoDocumento').val(self.usuario.tipo_documento.tid_id);
      $('#rol').val(self.usuario.rol.rol_id);
      $('#estado').val(self.usuario.estado.est_id);
    });
  }

  guardarCambios() {
    let usuario: Usuario = new Usuario();
    let tipoDocumento: TipoDocumento = new TipoDocumento();7
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
      Swal.fire({
        title: 'Estás seguro?',
        text: "No Podras Revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, Actualizar!'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(usuario);
          this.update(usuario);
        }
      })
    }
  }

  update(usuario: Usuario): void {
    this.usuarioService.updateUsuario(usuario, this.id).subscribe(
      data => {
        console.log(data);
        $('#form input, #form textarea, #form select').val('');
        //this.router.navigateByUrl('listUser');
      },
      err => console.error(err) // Muestra el error en la consola
    );
  }
  
}
