import { Routes } from '@angular/router';
import { VistaDetalleComponent } from './pages/vista-detalle/vista-detalle.component';
import { LogInComponent } from './pages/log-in/log-in.component';

export const routes: Routes = [
    { path: "vista-detalle", component: VistaDetalleComponent },
    { path: "log-in", component: LogInComponent}

];
