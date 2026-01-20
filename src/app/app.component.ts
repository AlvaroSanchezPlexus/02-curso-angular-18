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
    CardComponent,
    CommonModule,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    RouterOutlet,
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
    {
      titulo: 'Ejercicio 13',
      desc: 'Formulario de registro con signals',
      ruta: '/registro',
    },
    {
      titulo: 'Ejercicio 14',
      desc: 'Gestión de favoritos con @Input y @Output',
      ruta: '/favoritos',
    },
    {
      titulo: 'Ejercicio 15',
      desc: 'Configuración de usuario y two-way binding',
      ruta: '/configuracion',
    },
    {
      titulo: 'Ejercicio 16',
      desc: 'Temporizador con ciclo de vida de componentes',
      ruta: '/temporizador',
    },
    {
      titulo: 'Ejercicio 17',
      desc: 'Conversor de monedas con servicios',
      ruta: '/conversor-monedas',
    },
    {
      titulo: 'Ejercicio 18',
      desc: 'Dashboard de métricas',
      ruta: '/dashboard-metricas',
    },
    {
      titulo: 'Ejercicio 19',
      desc: 'Filtro de productos',
      ruta: '/filtro-productos',
    },
    {
      titulo: 'Ejercicio 20',
      desc: 'Temporizador Pomodoro',
      ruta: '/temporizador-pomodoro',
    },
  ];
}
