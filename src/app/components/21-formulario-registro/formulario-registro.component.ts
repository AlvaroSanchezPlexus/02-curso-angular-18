import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-registro.component.html',
  styleUrl: './formulario-registro.component.scss'
})
export class FormularioRegistroComponent {
  public formRegistro: FormGroup;
  public enviado = signal<boolean>(false);

  constructor(private fb: FormBuilder) {
    this.formRegistro = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmarPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  private passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmarPassword')?.value
      ? null : { mismatch: true };
  }

  public enviar(): void {
    if (this.formRegistro.valid) {
      console.log('Datos de registro:', this.formRegistro.value);
      this.enviado.set(true);
    }
  }
}

