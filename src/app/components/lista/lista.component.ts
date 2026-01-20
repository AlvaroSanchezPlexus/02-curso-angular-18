import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss',
})
export class ListaComponent {
  nuevaTarea = '';
  tareas: string[] = [];

  agregar() {
    if (this.nuevaTarea) {
      this.tareas.push(this.nuevaTarea);
      this.nuevaTarea = '';
    }
  }
}
