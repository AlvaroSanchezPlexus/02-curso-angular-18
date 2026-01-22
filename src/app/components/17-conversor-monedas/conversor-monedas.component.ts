import { DecimalPipe } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-conversor-monedas',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './conversor-monedas.component.html',
  styleUrl: './conversor-monedas.component.scss',
})
export class ConversorMonedasComponent {
  public montoUsd = signal<number>(0);

  private readonly TASA_EUR: number = 0.92;
  private readonly TASA_GBP: number = 0.79;
  private readonly TASA_JPY: number = 148.5;

  public eur = computed<number>(() => this.montoUsd() * this.TASA_EUR);
  public gbp = computed<number>(() => this.montoUsd() * this.TASA_GBP);
  public jpy = computed<number>(() => this.montoUsd() * this.TASA_JPY);

  constructor() {
    effect(() => {
      console.log(`Conversión actualizada para: ${this.montoUsd()} USD`);
    });
  }

  public actualizarMonto(evento: Event): void {
    const input = evento.target as HTMLInputElement;
    this.montoUsd.set(Number(input.value) || 0);
  }
}
