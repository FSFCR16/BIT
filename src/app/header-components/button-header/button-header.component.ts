import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-button-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-header.component.html',
  styleUrl: './button-header.component.css',
})
export class ButtonHeaderComponent {
  @Input() accionSvg: string = ""
  @Input() svgContent: string = ''
  @Input() borderRight: string = ""
  @Input() borderLetf: string = ""
  safeSVGContent: SafeHtml | undefined

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges() {
    // Cuando hay cambios en svgContent, se actualiza el contenido seguro
    this.safeSVGContent = this.sanitizer.bypassSecurityTrustHtml(this.svgContent);
  }

}
