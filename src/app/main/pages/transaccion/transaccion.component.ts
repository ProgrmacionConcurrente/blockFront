import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Usuario } from "src/app/home/interfaces/usuario.interface";
import { HomeService } from "src/app/home/services/home.service";
import { Transaccion } from "../../interfaces/transaccion.interface";
import { TransaccionService } from "../../services/transaccion.service";

@Component({
    selector: 'app-main',
    templateUrl: './transaccion.component.html',
    styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent {

    valor: number = 0;
    showMessage: boolean = false;
    usuarioId: any = '';
    transaccion: Transaccion = {}
    usuario: Usuario = {
        username: '',
        password: ''
    }
    receptor: Usuario = {};

    miFormulario: FormGroup = this.fb.group({
        receptor: [ '', [Validators.required]],
        monto: [ 0, [Validators.required] ]
    }); 

    constructor(private router: Router, private fb: FormBuilder, private snackBar: MatSnackBar, 
                private homeService: HomeService, private transaccionService: TransaccionService) {
        // Establecer USUARIO ID
        this.usuarioId = localStorage.getItem('usuarioId');
        this.usuarioId = Number.parseInt(this.usuarioId);
        
        // DATA USUARIO
        homeService.userId(this.usuarioId).subscribe( (response) => {
            this.usuario = response;
            this.valor = this.usuario.amount!;
        });
    }

    registrar(): void {
        // Valor del RECEPTOR
        if (this.miFormulario.valid) {
            this.homeService.userId(this.miFormulario.controls['receptor'].value).subscribe( (response) => {
                this.receptor = response;
                this.asignarValores();
            });
        } else {
            this.showMessage = !this.showMessage;
        }
    }

    asignarValores(): void {
        // Valores TRANSACCION
        this.transaccion = {
            amount: this.miFormulario.controls['monto'].value,
            sender: this.usuario,
            receiver: this.receptor
        }
        this.transaccionService.registrarTransaccion(this.transaccion).subscribe( () => {
                this.snackBar.open('Transacción Registrada!!!', 'Cerrar', {
                    duration: 2800
                });
                this.actualizarValor(this.transaccion.amount!);
                this.miFormulario.reset({
                    receptor: '',
                    amount: 0
                });
        });
    }

    actualizarValor( amount: number): void {
        this.valor = this.valor - amount;
    }
}