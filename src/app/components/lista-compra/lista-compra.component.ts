import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-compra',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-compra.component.html',
  styleUrl: './lista-compra.component.scss'
})
export class ListaCompraComponent {
  articulos: { nombre: string, comprado: boolean }[] = [];
  nuevoArticulo = '';

  agregar() {
    if (this.nuevoArticulo) {
      this.articulos.push({ nombre: this.nuevoArticulo, comprado: false });
      this.nuevoArticulo = '';
    }
  }

  get total() { return this.articulos.length; }
  get comprados() { return this.articulos.filter(a => a.comprado).length; }
}
