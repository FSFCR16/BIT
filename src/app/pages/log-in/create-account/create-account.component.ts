import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  @ViewChild('infoCreate') infoCreate!: ElementRef;

  obtenerElemento(): ElementRef {
    return this.infoCreate;
  }
}
