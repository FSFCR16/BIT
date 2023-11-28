import { Routes } from '@angular/router';
import { VistaDetalleComponent } from './pages/vista-detalle/vista-detalle.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { VistaCarritoComponent } from './pages/vista-carrito/vista-carrito.component';

export const routes: Routes = [
    { path: "vista-detalle", component: VistaDetalleComponent },
    { path: "log-in", component: LogInComponent},
    { path: "vista-carrito", component: VistaCarritoComponent},
    { path: "**", component: VistaDetalleComponent }
];
