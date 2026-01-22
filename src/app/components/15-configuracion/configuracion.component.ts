import { Component, signal, WritableSignal } from '@angular/core';
interface Config {
  modo: 'claro' | 'oscuro';
  tamano: number;
  fuente: string;
}

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [],
  templateUrl: './configuracion.component.html',
  styleUrl: './configuracion.component.scss',
})
export class ConfiguracionComponent {
  // Constante privada para los valores por defecto
  private readonly CONFIG_INICIAL: Config = {
    modo: 'claro',
    tamano: 16,
    fuente: 'Arial',
  };

  // Signal que gestiona el objeto de configuración
  public config: WritableSignal<Config> = signal<Config>(this.CONFIG_INICIAL);

  /**
   * Cambia entre modo claro y oscuro manteniendo el resto de propiedades
   */
  public cambiarModo(): void {
    this.config.update((c: Config) => ({
      ...c,
      modo: c.modo === 'claro' ? 'oscuro' : 'claro',
    }));
  }

  /**
   * Ajusta el tamaño de la fuente de forma relativa
   * @param delta Cantidad de píxeles a sumar o restar
   */
  public ajustarTamano(delta: number): void {
    this.config.update((c: Config) => ({
      ...c,
      tamano: c.tamano + delta,
    }));
  }

  /**
   * Maneja el cambio de fuente desde el evento del select
   * @param event Evento de cambio del DOM
   */
  public handleFuente(event: Event): void {
    // Tipado estricto del target del evento
    const select: HTMLSelectElement = event.target as HTMLSelectElement;

    this.config.update((c: Config) => ({
      ...c,
      fuente: select.value,
    }));
  }

  /**
   * Resetea la configuración al estado inicial
   */
  public resetear(): void {
    this.config.set(this.CONFIG_INICIAL);
  }
}
