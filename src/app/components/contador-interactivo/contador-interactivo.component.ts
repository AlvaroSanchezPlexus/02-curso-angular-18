import { Component } from '@angular/core';

@Component({
  selector: 'app-contador-interactivo',
  standalone: true,
  imports: [],
  templateUrl: './contador-interactivo.component.html',
  styleUrl: './contador-interactivo.component.scss',
})
export class ContadorInteractivoComponent {
  public contador = 0;

  public handleIncrementar(): void {
    this.contador++;
  }

  public handleDecrementar(): void {
    this.contador--;
  }

  public handleSetValor(input: HTMLInputElement): void {
    this.contador = parseInt(input.value) || 0;
  }

  public handleReset(input: HTMLInputElement): void {
    this.contador = 0;
    input.value = '';
  }

  public handleKeyDown(event: KeyboardEvent, input: HTMLInputElement): void {
    if (event.key.toLowerCase() === 'r') {
      this.handleReset(input);
    }
  }
}
