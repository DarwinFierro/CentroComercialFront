import { Estado } from "./Estado";
import { TipoDocumento } from "./TipoDocumento";
import { Rol } from "./rol";

export class Usuario {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    documento: string;
    tipoDocumento: TipoDocumento;
    estado: Estado;
    rol: Rol;
}
