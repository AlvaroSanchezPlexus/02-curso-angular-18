import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-temporizador-pomodoro',
  standalone: true,
  imports: [],
  templateUrl: './temporizador-pomodoro.component.html',
  styleUrl: './temporizador-pomodoro.component.scss',
})
export class TemporizadorPomodoroComponent {
  public segundosTotales = signal<number>(25 * 60);
  public activo = signal<boolean>(false);

  public tiempoFormateado = computed<string>(() => {
    const m = Math.floor(this.segundosTotales() / 60)
      .toString()
      .padStart(2, '0');
    const s = (this.segundosTotales() % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  });

  constructor() {
    effect(onCleanup => {
      if (this.activo()) {
        const id = setInterval(() => {
          this.segundosTotales.update(s => (s > 0 ? s - 1 : 0));
        }, 1000);

        onCleanup(() => clearInterval(id));
      }
    });

    effect(() => {
      if (this.segundosTotales() === 0 && this.activo()) {
        this.activo.set(false);
        alert('¡Tiempo de descanso!');
      }
    });
  }

  public alternar(): void {
    this.activo.update(v => !v);
  }

  public reiniciar(): void {
    this.activo.set(false);
    this.segundosTotales.set(25 * 60);
  }
}
