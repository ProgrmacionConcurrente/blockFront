import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Usuario } from "src/app/home/interfaces/usuario.interface";
import { Transaccion } from "../../interfaces/transaccion.interface";
import { TransaccionService } from "../../services/transaccion.service";

@Component({
    selector: 'app-main',
    templateUrl: './historial.component.html',
    styleUrls: ['./historial.component.css']
})
export class HistorialComponent {

    usuarioId: any = '';
    transaccionReceptorFiltrada: Transaccion[] = [];
    transaccionEmisorFiltrada: Transaccion[] = [];
    transacciones: Transaccion[] = [];

    constructor(private route: Router, private transaccionService: TransaccionService) {
        // Establecer USUARIO ID
        this.usuarioId = localStorage.getItem('usuarioId');
        this.usuarioId = Number.parseInt(this.usuarioId);
    

        this.transaccionService.obtenerTransacciones().subscribe( (response) => {
            this.transacciones = response;
            this.listaFiltrada();
        });
    }

    listaFiltrada(): void {
        // Lista Receptor
        for (let i = 0; i < this.transacciones.length; i++) {
            if (this.transacciones[i].receiver?.id === this.usuarioId) {
                this.transaccionReceptorFiltrada.push(this.transacciones[i]);
            }
        }
        // Lista Emisor
        for (let i = 0; i < this.transacciones.length; i++) {
            if (this.transacciones[i].sender?.id === this.usuarioId ) {
                this.transaccionEmisorFiltrada.push(this.transacciones[i]);
            }
        }
    }

}