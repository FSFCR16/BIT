import { Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from '../create-account/create-account.component';



@Component({
  selector: 'app-l-in',
  standalone: true,
  imports: [CommonModule, CreateAccountComponent],
  templateUrl: './l-in.component.html',
  styleUrl: './l-in.component.css'
})
export class LInComponent {

  @ViewChild('putInfo') putInfo!: ElementRef;
  @ViewChild(CreateAccountComponent) infoCreate!: CreateAccountComponent;
  @ViewChild('botonIniciarSesion') botonIniciarSesion!: ElementRef;
  @ViewChild('botonCrearCuenta') botonCrearCuenta!: ElementRef;
  

  constructor(private renderer: Renderer2) {}

  trueOrfalse: boolean=true

  ngAfterViewInit(){

    if( this.trueOrfalse === true){
      this.renderer.addClass(this.botonIniciarSesion.nativeElement, "boton-log");
      this.renderer.removeClass(this.botonCrearCuenta.nativeElement, "boton-log");
    }
  }

  cambiarDisplayIni(){
    this.trueOrfalse=true
    this.ngAfterViewInit()

    this.infoCreate.obtenerElemento().nativeElement.hidden= true
    this.putInfo.nativeElement.hidden= false

  }

  cambiarDisplayCrea(){

    this.trueOrfalse=false
    if(this.trueOrfalse === false){
      this.renderer.removeClass(this.botonIniciarSesion.nativeElement, "boton-log");
      this.renderer.addClass(this.botonCrearCuenta.nativeElement, "boton-log");
    }

    this.infoCreate.obtenerElemento().nativeElement.hidden= false
    this.putInfo.nativeElement.hidden= true

  }

}
