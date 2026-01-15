import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from "./components/footer/footer.component";
import { RouterLink, RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet, NavbarComponent, CardComponent, RouterLink, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  ejercicios = [
    { titulo: 'Ejercicio 1', desc: 'Calculadora Básica', ruta: '/calculadora' },
    { titulo: 'Ejercicio 2', desc: 'Lista de tareas', ruta: '/lista' },
    { titulo: 'Ejercicio 3', desc: 'Selector de colores', ruta: '/colores' },
    { titulo: 'Ejercicio 4', desc: 'Contador de clicks', ruta: '/contador' }
  ];
}
