import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comercio } from '../Models/Comercio';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ComercioService {

  private URL: string = `${environment.apiUrl}/comercio`;

  constructor(private http: HttpClient) { }

  getComercio(): Observable<Comercio[]> {
    return this.http.get<Comercio[]>(this.URL);
  }

  getComercioId(tipoComercioId: number): Observable<Comercio[]> {
    // Construir el objeto de parámetros con el tipo_comercio_id
    let params = new HttpParams();
    if (tipoComercioId) {
      params = params.set('tipo_comercio_id', tipoComercioId.toString());
    }
    // Agregar los parámetros a la URL de la solicitud
    return this.http.get<Comercio[]>(this.URL, { params: params });
  }
}
