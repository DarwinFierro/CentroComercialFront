import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { TipoDocumento } from "../Models/TipoDocumento";


@Injectable({
    providedIn: 'root'
})
export class TipoDocumentoService {

    private URL: string = `${environment.apiUrl}/tipoDocumento`;

    constructor(private http: HttpClient) { }

    getTipoDocumento(): Observable<TipoDocumento[]> {
        return this.http.get<TipoDocumento[]>(this.URL);
    }
}
