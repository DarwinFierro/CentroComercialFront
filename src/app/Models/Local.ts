import { Comercio } from "./Comercio";
import { Estado } from "./Estado";
import { Usuario } from "./Usuario";

export class Local {
    id: number;
    nombre: string;
    telefono: string;
    usuario: Usuario;
    estado: Estado;
    comercio: Comercio;
}
