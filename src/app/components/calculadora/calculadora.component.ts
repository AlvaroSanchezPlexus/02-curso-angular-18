import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
  num1 = 0;
  num2 = 0;
  resultado = 0;

  operar(tipo: string) {
    if (tipo === '+') this.resultado = this.num1 + this.num2;
    if (tipo === '-') this.resultado = this.num1 - this.num2;
    if (tipo === '*') this.resultado = this.num1 * this.num2;
    if (tipo === '/') this.resultado = this.num1 / this.num2;
  }
}
