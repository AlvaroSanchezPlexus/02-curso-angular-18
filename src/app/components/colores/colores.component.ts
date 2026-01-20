import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-colores',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './colores.component.html',
  styleUrl: './colores.component.scss',
})
export class ColoresComponent {
  colorElegido = '#3498db';
}
