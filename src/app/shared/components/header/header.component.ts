import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usu_name: string;
  usu_rol: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.usu_name = localStorage.getItem('usu_nombre');
    this.usu_rol = localStorage.getItem('rol_name');
  }

  Cerrar() {
    localStorage.clear();
    this.router.navigateByUrl('');
  }

}
