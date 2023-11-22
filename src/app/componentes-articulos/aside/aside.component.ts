import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDescuentoComponent } from '../card-descuento/card-descuento.component';
import { CardCategoriasComponent } from '../card-categorias/card-categorias.component';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule, CardDescuentoComponent, CardCategoriasComponent],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  

}
