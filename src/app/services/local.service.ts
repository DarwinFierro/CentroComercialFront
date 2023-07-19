import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Local } from '../Models/Local';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  private URL: string = `${environment.apiUrl}/local`;

  constructor(private http: HttpClient) { }

  getUsuario(): Observable<Local[]> {
    return this.http.get<Local[]>(this.URL);
  }

  crear(local: Local): Observable<void> {
    return this.http.post<void>(`${this.URL}`, local);
  }
}
