import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Usuario } from "../../interfaces/usuario.interface";
import { HomeService } from "../../services/home.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
  })
  export class LoginComponent {

    hide = true;
    showMessage: boolean = false;
    usuarios: Usuario[] = [];
    usuarioId: string = '';

    @ViewChild('miFormulario') miFormulario!: NgForm;
    initForm = {
      username: '',
      contra: ''
    }


    constructor(private router: Router, private homeService: HomeService) {
      this.homeService.login().subscribe( (response) => {
        this.usuarios = response;
      });
    }

    filtro(username: string, contrasena: string): boolean {
      for (let i = 0; i < this.usuarios.length; i++) {
        if (this.usuarios[i].username === username && this.usuarios[i].password === contrasena) {
          this.usuarioId = this.usuarios[i].id!.toString();
          return true;
        }
      } return false;
    }

    iniciar(): void {
      if (this.miFormulario.valid) {
        if (this.filtro(this.initForm.username, this.initForm.contra)) {
          localStorage.setItem('usuarioId', this.usuarioId);
          this.router.navigate(['./main']);
        } else {
          this.showMessage = true;
        }
      } else {
        this.showMessage = true;
      }
    }

    registrarme(): void {
      this.router.navigate(['auth/signup']);
    }
    
}