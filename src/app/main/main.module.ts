import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./pages/default/main.component";
import { HistorialComponent } from "./pages/historial/historial.component";
import { TransaccionComponent } from "./pages/transaccion/transaccion.component";

@NgModule({
    declarations: [
        MainComponent,
        HistorialComponent,
        TransaccionComponent
    ],
    imports: [
        CommonModule,
        MainRoutingModule,
        MaterialModule,
        ReactiveFormsModule
    ]
  })
  export class MainModule { }