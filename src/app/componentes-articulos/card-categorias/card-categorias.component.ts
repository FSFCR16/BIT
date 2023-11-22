import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-categorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-categorias.component.html',
  styleUrl: './card-categorias.component.css'
})
export class CardCategoriasComponent {
  @Input() tipoCategoria: string=""
}
