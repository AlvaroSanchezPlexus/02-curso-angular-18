import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface User {
  nombre: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss',
})
export class RegistroComponent {
  private readonly _emptyUser: User = {
    nombre: '',
    email: '',
    password: '',
  };

  public formImput = [
    {
      label: 'Nombre completo',
      field: 'nombre',
      type: 'text',
    },
    {
      label: 'Correo electrónico',
      field: 'email',
      type: 'email',
    },
    {
      label: 'Contraseña',
      field: 'password',
      type: 'password',
    },
  ];

  public user = signal<User>(this._emptyUser);

  public handleLimpiar(): void {
    this.user.set(this._emptyUser);
  }

  public esFormularioCompleto(): boolean {
    return (
      this.user()?.nombre !== '' &&
      this.user()?.email !== '' &&
      this.user()?.password !== ''
    );
  }

  public updateUserField(field: string, event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.user.update(currentUser => ({ ...currentUser, [field]: value }));
  }

  public valueFromUser(field: string): string {
    return this.user()[field as keyof User];
  }
}
