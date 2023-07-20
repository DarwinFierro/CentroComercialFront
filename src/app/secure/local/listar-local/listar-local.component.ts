import { Component, OnInit } from '@angular/core';
import { Local } from 'src/app/Models/Local';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-listar-local',
  templateUrl: './listar-local.component.html',
  styleUrls: ['./listar-local.component.css']
})
export class ListarLocalComponent implements OnInit {

  locales: Local[] = [];
  isLoading: boolean = true;

  constructor(
    private localService: LocalService
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.localService.getLocal().subscribe(data => {
      this.locales = data;
      console.log(data);
      
      this.isLoading = false; // Cambia el valor de isLoading una vez se carguen los datos
    });
  }

  eliminarLocal(local: Local) {
    console.log('Eliminar local:', local);
  }

}
