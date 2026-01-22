import { Component } from '@angular/core';

@Component({
  selector: 'app-mensajes',
  standalone: true,
  imports: [],
  templateUrl: './mensajes.component.html',
  styleUrl: './mensajes.component.scss',
})
export class MensajesComponent {
  mensajes = [
    { id: 1, texto: 'Sesión iniciada correctamente', tipo: 'info' },
    { id: 2, texto: 'Queda poco espacio en disco', tipo: 'warning' },
    { id: 3, texto: 'Error al conectar con el servidor', tipo: 'error' },
  ];

  eliminar(id: number) {
    this.mensajes = this.mensajes.filter(m => m.id !== id);
  }
}
