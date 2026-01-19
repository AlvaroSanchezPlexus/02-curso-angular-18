import { Routes } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ListaComponent } from './components/lista/lista.component';
import { ColoresComponent } from './components/colores/colores.component';
import { ContadorComponent } from './components/contador/contador.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { ListaCompraComponent } from './components/lista-compra/lista-compra.component';
import { ModoComponent } from './components/modo/modo.component';
import { GaleriaFiltroComponent } from './components/galeria-filtro/galeria-filtro.component';
import { ContadorInteractivoComponent } from './components/contador-interactivo/contador-interactivo.component';
import { CatalogoProductosComponent } from './components/catalogo-productos/catalogo-productos.component';
import { ValidadorComponent } from './components/validador/validador.component';
import { MenuContextualComponent } from './components/menu-contextual/menu-contextual.component';

export const routes: Routes = [
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'lista', component: ListaComponent },
  { path: 'colores', component: ColoresComponent },
  { path: 'contador', component: ContadorComponent },
  { path: 'mensajes', component: MensajesComponent },
  { path: 'compras', component: ListaCompraComponent },
  { path: 'modos', component: ModoComponent },
  { path: 'galeria', component: GaleriaFiltroComponent },
  { path: 'contador-interactivo', component: ContadorInteractivoComponent },
  { path: 'catalogo', component: CatalogoProductosComponent },
  { path: 'validador', component: ValidadorComponent },
  { path: 'menu-contextual', component: MenuContextualComponent },
  { path: '', redirectTo: 'calculadora', pathMatch: 'full' },
];
