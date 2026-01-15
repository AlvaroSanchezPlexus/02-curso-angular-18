import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modo.component.html',
  styleUrl: './modo.component.scss'
})
export class ModoComponent {
  modo: 'claro' | 'oscuro' | 'automático' = 'claro';
}
