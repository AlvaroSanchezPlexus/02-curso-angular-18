import { DecimalPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-conversor-monedas',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './conversor-monedas.component.html',
  styleUrl: './conversor-monedas.component.scss',
})
export class ConversorMonedasComponent {
  public montoUsd = signal<number>(0);

  private readonly _tasaEur: number = 0.92;
  private readonly _tasaGbp: number = 0.79;
  private readonly _tasaJpy: number = 148.5;

  public eur = computed<number>(() => this.montoUsd() * this._tasaEur);
  public gbp = computed<number>(() => this.montoUsd() * this._tasaGbp);
  public jpy = computed<number>(() => this.montoUsd() * this._tasaJpy);
  public actualizarMonto(evento: Event): void {
    const input = evento.target as HTMLInputElement;
    this.montoUsd.set(Number(input.value) || 0);
  }
}
