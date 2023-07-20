import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comercio } from 'src/app/Models/Comercio';
import { Estado } from 'src/app/Models/Estado';
import { Local } from 'src/app/Models/Local';
import { TipoComercio } from 'src/app/Models/TipoComercio';
import { Usuario } from 'src/app/Models/Usuario';
import { ComercioService } from 'src/app/services/comercio.service';
import { EstadoService } from 'src/app/services/estado.service';
import { LocalService } from 'src/app/services/local.service';
import { TipoComercioService } from 'src/app/services/tipo-comercio.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
import { Observable } from "rxjs";

declare var $: any;

@Component({
  selector: 'app-editar-local',
  templateUrl: './editar-local.component.html',
  styleUrls: ['./editar-local.component.css']
})
export class EditarLocalComponent implements OnInit {

  local: Local;
  id: number;
  lstTiposComercio: TipoComercio[];
  lstComercios: Comercio[];
  lstUsuarios: Usuario[];
  lstEstados: Estado[];
  isLoading: boolean = true;
  mensajeSatisfactorio: string = 'Satisfactorio';

  constructor(
    private localService: LocalService,
    private tipoComercioService: TipoComercioService,
    private comercioService: ComercioService,
    private estadoService: EstadoService,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
  ) { this.id = Number(this.route.snapshot.paramMap.get('id')) }

  ngOnInit(): void {
    this.listarTiposComercio();
    this.listarEstados();
    this.listarUusarios();
    this.obtenerLocal(this.id);
  }

  listarTiposComercio() {
    this.tipoComercioService.getTipoDocumento().subscribe(data => {
      this.lstTiposComercio = data;
      console.log("lstTiposComercio", this.lstTiposComercio);
    })
  }

  listarComercio() {
    const id = $('#tipoComercio').val();
    if (id) {
      this.comercioService.getComercioId(id).subscribe(data => {
        this.lstComercios = data;
        console.log("lstComercios", this.lstComercios);
      });
    } else {
      this.lstComercios = [];
    }
  }

  listarEstados() {
    this.estadoService.getEstado().subscribe(data => {
      this.lstEstados = data;
    })
  }

  listarUusarios() {
    this.usuarioService.getUsuarioLocal().subscribe(data => {
      this.lstUsuarios = data;
      console.log(data);

    })
  }

  obtenerLocal(id: number): void {
    this.localService.getLocalId(id).subscribe(
      (localData) => {
        this.local = localData;
        const idTipoComercio = this.local.comercio.tipo_comercio.tic_id;
        this.listarComercioLlegada(idTipoComercio).subscribe(
          (comercioData) => {
            this.lstComercios = comercioData;
            this.inicializarFormulario();
            this.isLoading = false;
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  listarComercioLlegada(idTipoComercio: number): Observable<any> {
    return this.comercioService.getComercioId(idTipoComercio);
  }

  inicializarFormulario(): void {
    const self = this;
    $(function () {
      $('#nombre').val(self.local.loc_nombre);
      $('#telefono').val(self.local.loc_telefono);
      $('#tipoComercio').val(self.local.comercio.tipo_comercio.tic_id);
      $('#comercio').val(self.local.comercio.com_id);
      $('#usuario').val(self.local.usuario.usu_id);
      $('#estado').val(self.local.estado.est_id);
    });
  }

  guardarCambios() {
    let local: Local = new Local();
    let comercio: Comercio = new Comercio();
    let tipoComercio: TipoComercio = new TipoComercio();
    let estado: Estado = new Estado();
    let usuario: Usuario = new Usuario();

    local.loc_nombre = $('#nombre').val();
    local.loc_telefono = $('#telefono').val();

    tipoComercio.tic_id = $('#tipoComercio').val();
    comercio.com_id = $('#comercio').val();
    comercio.tipo_comercio = tipoComercio;
    local.comercio = comercio;
    usuario.usu_id = $('#usuario').val();
    local.usuario = usuario;
    estado.est_id = $('#estado').val();
    local.estado = estado;


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
        this.update(local);
      }
    })

  }
  update(local: Local): void {
    this.localService.updateLocal(this.id, local).subscribe(data => {
      console.log(data);
      $('#form input, #form textarea, #form select').val('');
      this.router.navigateByUrl('/dashboard/listarLocal');
    }, err => console.error(err));
  }

}
