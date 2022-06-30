import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { HomeRoutingModule } from "./home-routing.module";
import { LoginComponent } from "./pages/login/login.component";
import { RegistroComponent } from "./pages/registro/registro.component";

@NgModule({
    declarations: [
      LoginComponent,
      RegistroComponent
    ],
    imports: [
      CommonModule,
      MaterialModule,
      HomeRoutingModule,
      FormsModule,
      ReactiveFormsModule
    ]
  })
  export class HomeModule { }