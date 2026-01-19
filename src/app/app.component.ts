import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    NavbarComponent,
    CardComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  ejercicios = [
    { titulo: 'Ejercicio 1', desc: 'Calculadora Básica', ruta: '/calculadora' },
    { titulo: 'Ejercicio 2', desc: 'Lista de tareas', ruta: '/lista' },
    { titulo: 'Ejercicio 3', desc: 'Selector de colores', ruta: '/colores' },
    { titulo: 'Ejercicio 4', desc: 'Contador de clicks', ruta: '/contador' },
    {
      titulo: 'Ejercicio 5',
      desc: 'Alertas con @switch y @for',
      ruta: '/mensajes',
    },
    {
      titulo: 'Ejercicio 6',
      desc: 'Gestión de artículos y @empty',
      ruta: '/compras',
    },
    {
      titulo: 'Ejercicio 7',
      desc: 'Selector de temas dinámicos con @switch',
      ruta: '/modos',
    },
    {
      titulo: 'Ejercicio 8',
      desc: 'Filtros y uso de $index',
      ruta: '/galeria',
    },
    {
      titulo: 'Ejercicio 9',
      desc: 'Uso de Template Refs y Eventos',
      ruta: '/contador-interactivo',
    },
    {
      titulo: 'Ejercicio 10',
      desc: 'Comunicación Padre-Hijo @Input',
      ruta: '/catalogo',
    },
    {
      titulo: 'Ejercicio 11',
      desc: 'Validación visual y referencias',
      ruta: '/validador',
    },
    {
      titulo: 'Ejercicio 12',
      desc: 'Eventos de mouse y preventDefault',
      ruta: '/menu-contextual',
    },
  ];
}
