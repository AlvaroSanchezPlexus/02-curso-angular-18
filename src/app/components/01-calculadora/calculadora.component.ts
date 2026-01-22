import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss',
})
export class CalculadoraComponent {
  public num1 = 0;
  public num2 = 0;
  public resultado = 0;

  public operar(tipo: string): void {
    if (tipo === '+') {
      this.resultado = this.num1 + this.num2;
    }
    if (tipo === '-') {
      this.resultado = this.num1 - this.num2;
    }
    if (tipo === '*') {
      this.resultado = this.num1 * this.num2;
    }
    if (tipo === '/') {
      this.resultado = this.num1 / this.num2;
    }
  }
}
