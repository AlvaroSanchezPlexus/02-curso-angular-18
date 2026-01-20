import { Component, WritableSignal, signal } from '@angular/core';
interface Pelicula {
  id: number;
  titulo: string;
  anio: number;
  vista: boolean;
}

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.scss',
})
export class FavoritosComponent {
  // Signal para la lista de películas con tipado estricto
  public peliculas: WritableSignal<Pelicula[]> = signal<Pelicula[]>([]);

  private siguienteId = 1;

  /**
   * Agrega una nueva película a la lista usando inmutabilidad
   * @param tituloInput
   * @param anioInput
   */
  public handleAgregar(
    tituloInput: HTMLInputElement,
    anioInput: HTMLInputElement,
  ): void {
    const titulo: string = tituloInput.value.trim();
    const anio: number = parseInt(anioInput.value);

    if (titulo === '' || isNaN(anio)) {
      return;
    }

    this.peliculas.update((lista: Pelicula[]) => [
      ...lista,
      {
        id: this.siguienteId++,
        titulo: titulo,
        anio: anio,
        vista: false,
      },
    ]);

    tituloInput.value = '';
    anioInput.value = '';
  }

  public eliminarPelicula(id: number): void {
    this.peliculas.update((lista: Pelicula[]) =>
      lista.filter((p: Pelicula) => p.id !== id),
    );
  }

  public toggleVista(id: number): void {
    this.peliculas.update((lista: Pelicula[]) =>
      lista.map((p: Pelicula) => (p.id === id ? { ...p, vista: !p.vista } : p)),
    );
  }

  public contarVistas(): number {
    return this.peliculas().filter((p: Pelicula) => p.vista).length;
  }
}
