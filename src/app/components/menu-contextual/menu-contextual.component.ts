import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu-contextual',
  standalone: true,
  imports: [],
  template: `
    <div class="area" (contextmenu)="handleContextMenu($event)">
      Haz click derecho en este recuadro

      @if (mostrarMenu) {
        <ul
          class="menu"
          [style.top.px]="posicion.y"
          [style.left.px]="posicion.x"
        >
          <li (click)="handleOpcion('Perfil')">Ir al Perfil</li>
          <li (click)="handleOpcion('Ajustes')">Ajustes</li>
        </ul>
      }
    </div>
  `,
  templateUrl: './menu-contextual.component.html',
  styleUrl: './menu-contextual.component.scss',
})
export class MenuContextualComponent {
  public mostrarMenu = false;
  public posicion = { x: 0, y: 0 };

  public handleContextMenu(event: MouseEvent): void {
    event.preventDefault();
    this.mostrarMenu = true;
    this.posicion = { x: event.clientX, y: event.clientY };
  }

  @HostListener('document:click')
  public handleDocumentClick(): void {
    this.mostrarMenu = false;
  }

  public handleOpcion(opcion: string): void {
    console.log('Opción seleccionada:', opcion);
  }
}
