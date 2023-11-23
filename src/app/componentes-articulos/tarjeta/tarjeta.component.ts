import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})
export class TarjetaComponent {
  @Input() img: String = ""
  @Input() caracteristicas: String = ""
  @Input() precioDecuento: number = 0
  @Input() porcentajeDecuento: number = 0
  precioConDescuento: number= 0
  @Input() precioTarjeta: number= 0
  @Input() llegada: string=""

  pocentaje(){
    this.precioConDescuento= this.precioDecuento - (this.precioDecuento * (this.porcentajeDecuento/100))
  }
  ngOnInit() { 
    this.pocentaje();
  }
  getPrecioDescuentoFormato(): string {
    return this.precioDecuento.toLocaleString('es-ES', { style: 'currency', currency: "COP", minimumFractionDigits: 0 });
  }
}
