import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comercio } from '../Models/Comercio';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ComercioService {

  private URL: string = `${environment.apiUrl}/comercio`;

  constructor(private http:HttpClient){}

  getEstado(): Observable<Comercio[]>{
      return this.http.get<Comercio[]>(this.URL);
  }
}
