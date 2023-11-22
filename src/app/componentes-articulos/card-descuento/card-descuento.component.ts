import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-descuento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-descuento.component.html',
  styleUrl: './card-descuento.component.css'
})
export class CardDescuentoComponent {
  @Input() imgDescuentos: string = ""
}
