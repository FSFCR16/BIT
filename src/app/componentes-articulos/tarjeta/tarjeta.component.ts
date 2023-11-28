import { Component, Input, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Atributos, DataServiceService } from '../../servicios/data-service.service';


@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})
export class TarjetaComponent {
  @Input() idElemento!:string;
  @Input() img: String = ""
  @Input() caracteristicas: String = ""
  @Input() precioDecuento: number = 0
  @Input() porcentajeDecuento: number = 0
  precioConDescuento: number= 0
  @Input() precioTarjeta: number= 0
  @Input() llegada: string=""
  savedData: string = '';
  constructor (private dataService: DataServiceService){}

  obtenerId(event: Event) {
    const node = (event.target as HTMLElement).closest('app-tarjeta');
    const atributo: Atributos = {
      idElemento: node?.getAttribute("idElemento") ?? '',
      img: node?.getAttribute("img") ?? 'valorPorDefecto',
      caracteristicas: node?.getAttribute("caracteristicas") ?? 'valorPorDefecto',
      precioDescuento: Number(node?.getAttribute("precioDescuento")) || 0,
      porcentajeDescuento: Number(node?.getAttribute("porcentajeDescuento")) || 0,
      precioTarjeta: Number(node?.getAttribute("precioTarjeta")) || 0,
      precioConDescuento: this.precioConDescuento
    }
    this.dataService.setAtributos(atributo)
    console.log(atributo)
    this.dataService.transformarArray()
  }


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
