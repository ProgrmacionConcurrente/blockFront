import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
  })
  export class MainComponent {
  
    constructor(private route: Router) {
    }

  transaccion(): void {
    this.route.navigate(['./main/transaccion']);
  }

  historial(): void {
    this.route.navigate(['./main/historial']);
  }

  logout(): void {
    this.route.navigate(['auth/login']);
  }
}