import { Component, OnInit } from '@angular/core';
import { Local } from 'src/app/Models/Local';
import { RolBasedHideService } from 'src/app/rol-based-hide.service';
import { LocalService } from 'src/app/services/local.service';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-listar-local',
  templateUrl: './listar-local.component.html',
  styleUrls: ['./listar-local.component.css']
})
export class ListarLocalComponent implements OnInit {

  locales: Local[] = [];
  isLoading: boolean = true;
  usu_id: number;

  constructor(
    private localService: LocalService,
    private rolBasedHideService: RolBasedHideService
  ) { }

  ngOnInit(): void {
    this.usu_id = parseInt(localStorage.getItem('usu_id'), 10);
    this.listar();
  }

  ngAfterViewChecked() {
    this.ocultar();
  }
  listar() {
    this.localService.getLocal().subscribe(data => {
      this.locales = data;
      this.isLoading = false;
    });
  }

  ocultar() {
    if (this.rolBasedHideService.shouldHide(['WATCHMAN'])) {
      $('.hiden').remove();
    }
    if (this.rolBasedHideService.shouldHide(['LOCAL_OWNER'])) {
      $('.delete').remove();
      $('.custom-button').each((index, element) => {
        const localId = parseInt($(element).attr('data-local-id'), 10);
        if (localId === this.usu_id) {
          $(element).show();
        } else {
          $(element).hide();
        }
      });
    }
  }

  eliminarLocal(id: number) {
    this.localService.deleteLocal(id).subscribe(data => {
      Swal.fire({
        icon: 'success',
        title: 'Correcto',
        text: 'local Borrado Correctamente',
      })
      this.localService.getLocal().subscribe(data => {
        this.locales = data;
      });
    });
  }
}
