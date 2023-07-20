import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

declare var $: any;

@Component({
  selector: 'app-registrar-local',
  templateUrl: './registrar-local.component.html',
  styleUrls: ['./registrar-local.component.css']
})
export class RegistrarLocalComponent implements OnInit {

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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarTiposComercio();
    this.listarEstados();
    this.listarUusarios();
  }

  listarTiposComercio() {
    this.tipoComercioService.getTipoDocumento().subscribe(data => {
      this.lstTiposComercio = data;
      console.log("lstTiposComercio", this.lstTiposComercio);
    })
  }

  listarComercio() {
    // Obtener el tipo de comercio seleccionado del select
    const id = $('#tipoComercio').val();
    // Verificar si se seleccionó un tipo de comercio
    if (id) {
      // Obtener los comercios asociados al tipo de comercio seleccionado
      this.comercioService.getComercioId(id).subscribe(data => {
        this.lstComercios = data;
        console.log("lstComercios", this.lstComercios);
      });
    } else {
      // Si no se seleccionó un tipo de comercio, vaciar la lista de comercios
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

    console.log(local);
    

    this.crear(local);

  }
  crear(local: Local): void {
    this.localService.crearLocal(local).subscribe(data => {
      console.log(data);
      $('#form input, #form textarea, #form select').val('');
      this.router.navigateByUrl('listarLocal');
    }, err => console.error(err));
  }

}
