import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaComponent } from '../../componentes-articulos/tarjeta/tarjeta.component';
import { HeaderCardComponent } from '../../componentes-articulos/header-card/header-card.component';
import { AsideComponent } from '../../componentes-articulos/aside/aside.component';

@Component({
  selector: 'app-vista-detalle',
  standalone: true,
  imports: [CommonModule, TarjetaComponent, HeaderCardComponent, AsideComponent],
  templateUrl: './vista-detalle.component.html',
  styleUrl: './vista-detalle.component.css'
})
export class VistaDetalleComponent {

}
