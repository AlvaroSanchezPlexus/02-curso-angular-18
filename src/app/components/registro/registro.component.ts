import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss',
})
export class RegistroComponent {
  public nombre: WritableSignal<string> = signal('');
  public email: WritableSignal<string> = signal('');
  public password: WritableSignal<string> = signal('');

  public handleLimpiar(): void {
    this.nombre.set('');
    this.email.set('');
    this.password.set('');
  }

  public esFormularioCompleto(): boolean {
    return (
      this.nombre() !== '' && this.email() !== '' && this.password() !== ''
    );
  }
}
