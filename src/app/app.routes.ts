import { Routes } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ListaComponent } from './components/lista/lista.component';
import { ColoresComponent } from './components/colores/colores.component';
import { ContadorComponent } from './components/contador/contador.component';

export const routes: Routes = [{ path: 'calculadora', component: CalculadoraComponent },
    { path: 'lista', component: ListaComponent },
    { path: 'colores', component: ColoresComponent },
    { path: 'contador', component: ContadorComponent },
    { path: '', redirectTo: 'calculadora', pathMatch: 'full' }];
