import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-galeria-filtro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './galeria-filtro.component.html',
  styleUrl: './galeria-filtro.component.scss'
})
export class GaleriaFiltroComponent {
  imagenes = [
    { id: 1, url: 'https://picsum.photos/id/10/200', cat: 'Naturaleza' },
    { id: 2, url: 'https://picsum.photos/id/20/200', cat: 'Arquitectura' },
    { id: 3, url: 'https://picsum.photos/id/30/200', cat: 'Naturaleza' }
  ];
  filtro = 'Todas';

  get filtradas() {
    return this.filtro === 'Todas'
      ? this.imagenes
      : this.imagenes.filter(img => img.cat === this.filtro);
  }
}
