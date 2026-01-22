import { CurrencyPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
interface IProducto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
}
@Component({
  selector: 'app-filtro-productos',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './filtro-productos.component.html',
  styleUrl: './filtro-productos.component.scss',
})
export class FiltroProductosComponent {
  public productos = signal<IProducto[]>([
    { id: 1, nombre: 'Laptop Gamin', precio: 1500, categoria: 'Tecnología' },
    { id: 2, nombre: 'Silla Ergonómica', precio: 200, categoria: 'Muebles' },
    { id: 3, nombre: 'Teclado Mecánico', precio: 100, categoria: 'Tecnología' },
    { id: 4, nombre: 'Mesa de Escritorio', precio: 300, categoria: 'Muebles' },
  ]);

  public filtros = signal({ categoria: 'Todos', precioMin: 0 });

  public productosFiltrados = computed<IProducto[]>(() => {
    const { categoria, precioMin } = this.filtros();
    return this.productos().filter(
      p =>
        (categoria === 'Todos' || p.categoria === categoria) &&
        p.precio >= precioMin
    );
  });

  public actualizarFiltro(campo: string, evento: Event): void {
    const elemento = evento.target as HTMLInputElement | HTMLSelectElement;
    const valor =
      elemento.type === 'number' ? Number(elemento.value) : elemento.value;

    this.filtros.update(actual => ({ ...actual, [campo]: valor }));
  }
}
