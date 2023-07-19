import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { TipoComercio } from "../Models/TipoComercio";


@Injectable({
    providedIn: 'root'
})
export class TipoComercioService {

    private URL: string = `${environment.apiUrl}/tipoComercio`;

    constructor(private http: HttpClient) { }

    getTipoDocumento(): Observable<TipoComercio[]> {
        return this.http.get<TipoComercio[]>(this.URL);
    }
}
