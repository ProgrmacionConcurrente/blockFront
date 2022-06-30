import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./pages/default/main.component";
import { HistorialComponent } from "./pages/historial/historial.component";
import { TransaccionComponent } from "./pages/transaccion/transaccion.component";

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                component: TransaccionComponent
            },
            {
                path: 'historial',
                component: HistorialComponent
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule { }