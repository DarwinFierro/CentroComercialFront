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

  getLocal(): Observable<Local[]> {
    return this.http.get<Local[]>(this.URL);
  }

  getLocalId(id:number): Observable<Local> {
    return this.http.get<Local>(`${this.URL}/${id}`);
  }

  crearLocal(local: Local): Observable<void> {
    return this.http.post<void>(`${this.URL}`, local);
  }

  updateLocal(id:number, local: Local): Observable<void> {
    return this.http.put<void>(`${this.URL}/${id}`, local);
  }

  deleteLocal(id:number): Observable<Local> {
    return this.http.delete<Local>(`${this.URL}/${id}`);
  }
}
