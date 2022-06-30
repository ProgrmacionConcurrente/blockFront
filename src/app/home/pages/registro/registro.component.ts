import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../interfaces/usuario.interface';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  showMessage: boolean = false;
  hide: boolean = true;

  usuario: Usuario = {
    username: '',
    password: '',
    amount: 0
  };

  miFormulario: FormGroup = this.fb.group({
    username: [ this.usuario.username, [Validators.required]],
    password: [ this.usuario.password, [Validators.required] ],
    monto: [ this.usuario.amount, [Validators.required]]
  });

  constructor(private router: Router, private fb: FormBuilder, private homeService: HomeService) { 

  }

  registrar(): void {
    if (this.miFormulario.valid) {
      this.asignarValores();
      //this.router.navigate(['./main']);
      //this.homeService.registro(this.usuario)
    } else {
      this.showMessage = true;
  }
    //this.router.navigate(['./main']);
  }

  asignarValores(): void {
    this.usuario = {
      username: this.miFormulario.controls['username'].value,
      password: this.miFormulario.controls['password'].value,
      amount: this.miFormulario.controls['monto'].value
    }
    console.log(this.usuario);
  }
}