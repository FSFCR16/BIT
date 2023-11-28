import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carta-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carta-carrito.component.html',
  styleUrl: './carta-carrito.component.css'
})
export class CartaCarritoComponent {
  @Input() img:string=""
  @Input() caracteristicas:string=""
  @Input() idElemento:string=""
  @Input() precioConDescuento:number=0
}
