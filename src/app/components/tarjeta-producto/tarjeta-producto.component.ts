import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-producto',
  standalone: true,
  imports: [],
  template: `
    <div class="card" [style.opacity]="disponible ? 1 : 0.5">
      <img [src]="imagen" [alt]="nombre" style="width: 100px" />
      <h3>{{ nombre }}</h3>
      <p>Precio: {{ precio }}€</p>
      <p>{{ disponible ? 'En Stock' : 'Agotado' }}</p>
    </div>
  `,
  templateUrl: './tarjeta-producto.component.html',
  styleUrl: './tarjeta-producto.component.scss',
})
export class TarjetaProductoComponent {
  @Input() nombre = '';
  @Input() precio = 0;
  @Input() imagen = '';
  @Input() disponible = true;
}
