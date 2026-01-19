import { Component } from '@angular/core';

@Component({
  selector: 'app-validador',
  standalone: true,
  imports: [],
  templateUrl: './validador.component.html',
  styleUrl: './validador.component.scss',
})
export class ValidadorComponent {
  public emailValido = true;

  public handleKeyUpEmail(valor: string): void {
    this.emailValido = valor.includes('@') && valor.includes('.');
  }

  public handleLimpiar(
    inputMail: HTMLInputElement,
    inputTexto: HTMLTextAreaElement,
  ): void {
    inputMail.value = '';
    inputTexto.value = '';
    this.emailValido = true;
  }

  public handleSubmit(event: Event): void {
    event.preventDefault();
    if (this.emailValido) {
      console.log('Formulario válido enviado');
    }
  }
}
