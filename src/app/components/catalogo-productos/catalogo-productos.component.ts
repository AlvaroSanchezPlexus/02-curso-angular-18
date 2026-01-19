import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo-productos',
  standalone: true,
  imports: [],
  template: `
    <div class="catalogo">
      @for (prod of productos; track prod.nombre) {
        <app-producto
          [nombre]="prod.nombre"
          [precio]="prod.precio"
          [imagen]="prod.imagen"
          [disponible]="prod.disponible"
        >
        </app-producto>
      }
    </div>
  `,
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
}
