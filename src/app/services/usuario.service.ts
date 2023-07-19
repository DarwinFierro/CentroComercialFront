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

  getUsuarioLocal(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.URL}/local`);
  }

  crearUsuario(usuario: Usuario): Observable<void> {
    return this.http.post<void>(`${this.URL}`, usuario);
  }

  getUsuarioPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.URL}/${id}`);
  }
  
  updateUsuario(usuario: Usuario, id: number): Observable<Usuario[]> {
    return this.http.put<Usuario[]>(`${this.URL}/${id}`, usuario);
  }

}
