import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-header.component.html',
  styleUrl: './button-header.component.css',
  template: `
  <div [innerHTML]="svgCode"></div>
  `,
})
export class ButtonHeaderComponent {
  @Input() accionSvg: string = ""
}
