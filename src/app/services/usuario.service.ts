import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Usuario } from '../Models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private URL: string = `${environment.apiUrl}/usuario`;

  constructor(private http: HttpClient) { }

  getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.URL);
  }

  crear(usuario: Usuario): Observable<void> {
    return this.http.post<void>(`${this.URL}`, usuario);
  }
}
