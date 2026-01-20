import { Component } from '@angular/core';
import { TarjetaProductoComponent } from './components/tarjeta-producto/tarjeta-producto.component';

@Component({
  selector: 'app-catalogo-productos',
  standalone: true,
  imports: [TarjetaProductoComponent],
  templateUrl: './catalogo-productos.component.html',
  styleUrl: './catalogo-productos.component.scss',
})
export class CatalogoProductosComponent {
  public productos = [
    {
      nombre: 'Ratón Pro',
      precio: 50,
      imagen: 'https://picsum.photos/100',
      disponible: true,
    },
    {
      nombre: 'Teclado Mecánico',
      precio: 120,
      imagen: 'https://picsum.photos/101',
      disponible: false,
    },
    {
      nombre: 'Monitor 4K',
      precio: 300,
      imagen: 'https://picsum.photos/102',
      disponible: true,
    },
  ];

  public deleteProducto(nombre: string): void {
    this.productos = this.productos.filter(p => p.nombre !== nombre);
  }
}
