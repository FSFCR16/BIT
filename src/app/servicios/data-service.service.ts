import { Injectable } from '@angular/core';
import { timeStamp } from 'console';

export interface Atributos {
  idElemento: string;
  img: string;
  caracteristicas: string;
  precioDescuento: number;
  porcentajeDescuento: number;
  precioTarjeta: number;
  precioConDescuento: number
}

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {
  private atributos: Atributos = {
    idElemento: '',
    img: '',
    caracteristicas: '',
    precioDescuento: 0,
    porcentajeDescuento: 0,
    precioTarjeta: 0,
    precioConDescuento:0
  };

  private arrayElementos:Atributos[]= []

  setAtributos(valores: Atributos) {
    this.atributos = valores;
    console.log(this.atributos)

  }
  transformarArray(){
    this.arrayElementos.push(this.atributos)
    console.log(this.arrayElementos)
  }

  getAtributos() {
    return this.arrayElementos;
  }
}
