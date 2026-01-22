import { CurrencyPipe } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard-metricas',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './dashboard-metricas.component.html',
  styleUrl: './dashboard-metricas.component.scss',
})
export class DashboardMetricasComponent {
  private readonly _datosGuardados = localStorage.getItem('historial_ventas');

  public ventas = signal<number[]>(
    this._datosGuardados ? JSON.parse(this._datosGuardados) : []
  );

  public total = computed<number>(() =>
    this.ventas().reduce((a, b) => a + b, 0)
  );
  public promedio = computed<number>(() =>
    this.ventas().length ? this.total() / this.ventas().length : 0
  );
  public maximo = computed<number>(() =>
    this.ventas().length ? Math.max(...this.ventas()) : 0
  );

  constructor() {
    effect(() => {
      localStorage.setItem('historial_ventas', JSON.stringify(this.ventas()));
    });
  }

  public agregarVenta(input: HTMLInputElement): void {
    const valor = Number(input.value);
    if (valor > 0) {
      this.ventas.update(actual => [...actual, valor]);
      input.value = '';
    }
  }

  public borrarHistorial(): void {
    this.ventas.set([]);
  }
}
