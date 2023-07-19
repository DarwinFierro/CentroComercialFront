import { Estado } from "./Estado";
import { TipoDocumento } from "./TipoDocumento";
import { Rol } from "./rol";

export class Usuario {
    usu_id: number;
    usu_nombre: string;
    usu_apellido: string;
    usu_email: string;
    usu_password: string;
    usu_documento: string;
    tipo_documento: TipoDocumento;
    estado: Estado;
    rol: Rol;
}
