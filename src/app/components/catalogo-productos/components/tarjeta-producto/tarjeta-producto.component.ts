import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-tarjeta-producto',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta-producto.component.html',
  styleUrl: './tarjeta-producto.component.scss',
})
export class TarjetaProductoComponent {
  //TODO actualizar a la nueva sintaxis de inputs cuando esté disponible
  @Input() nombre = '';
  @Input() precio = 0;
  @Input() imagen = '';
  @Input() disponible = true;

  public deleteItemHijo = output<void>();

  public deleteTarjeta() {
    this.deleteItemHijo.emit();
  }
}
