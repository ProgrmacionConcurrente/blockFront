import { Usuario } from "src/app/home/interfaces/usuario.interface";

export interface Transaccion {
    id?: number;
    dateCreated?: string;
    amount?: number;
    sender?: Usuario;
    receiver?: Usuario;
}