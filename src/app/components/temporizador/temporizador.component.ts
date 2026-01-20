import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-temporizador',
  standalone: true,
  imports: [],
  templateUrl: './temporizador.component.html',
  styleUrl: './temporizador.component.scss',
})
export class TemporizadorComponent {
  public segundos: WritableSignal<number> = signal(0);
  public idIntervalo: ReturnType<typeof setInterval> | null = null;

  public iniciar(): void {
    if (this.idIntervalo !== null) return;

    this.idIntervalo = setInterval(() => {
      this.segundos.update((s: number) => s + 1);
    }, 1000);
  }

  public pausar(): void {
    if (this.idIntervalo !== null) {
      clearInterval(this.idIntervalo);
      this.idIntervalo = null;
    }
  }

  public resetear(): void {
    this.pausar();
    this.segundos.set(0);
  }

  public formatearTiempo(): string {
    const mm: string = Math.floor(this.segundos() / 60)
      .toString()
      .padStart(2, '0');
    const ss: string = (this.segundos() % 60).toString().padStart(2, '0');
    return `${mm}:${ss}`;
  }
}
