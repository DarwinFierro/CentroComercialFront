import { Comercio } from "./Comercio";
import { Estado } from "./Estado";
import { Usuario } from "./Usuario";

export class Local {
    loc_id: number;
    loc_nombre: string;
    loc_telefono: string;
    usuario: Usuario;
    estado: Estado;
    comercio: Comercio;
}
