import { Component, ViewChild, ElementRef, SimpleChange } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaCarritoComponent } from './carta-carrito/carta-carrito.component';
import { Atributos, DataServiceService } from '../../servicios/data-service.service';

@Component({
  selector: 'app-vista-carrito',
  standalone: true,
  imports: [CommonModule, CartaCarritoComponent],
  templateUrl: './vista-carrito.component.html',
  styleUrl: './vista-carrito.component.css'
})
export class VistaCarritoComponent {
  atributos: Atributos[]  = [];
  arraylenght: number = 0;
  precioConDescuento: number = 0;
  constructor(private dataTransferService: DataServiceService) {}

  ngOnInit() {
    this.atributos= this.dataTransferService.getAtributos()
    for( let i : number=0; i< this.atributos.length; i++){
      this.precioConDescuento += this.dataTransferService.getAtributos()[i].precioConDescuento
    }
    this.arraylenght+=this.dataTransferService.getAtributos().length

   
  }

}
  

