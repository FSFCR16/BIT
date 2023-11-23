import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LInComponent } from './l-in/l-in.component';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule,LInComponent],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

}
