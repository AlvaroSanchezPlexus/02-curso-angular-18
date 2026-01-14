# 🚀 Curso Completo de Angular 18 - Desde Cero

## 📋 Índice del Curso

### Módulo 1: Fundamentos

- Clase 1: Introducción a Angular y Configuración del Entorno
- Clase 2: Primer Componente y Estructura de un Proyecto
- Clase 3: Templates y Data Binding
- Clase 4: Directivas Modernas (@if, @for, @switch)
- Clase 5: Eventos y Comunicación Básica

### Módulo 2: Reactividad Moderna

- Clase 6: Introducción a Signals
- Clase 7: Computed Signals y Effects
- Clase 8: Input Signals y Comunicación entre Componentes
- Clase 9: Output Signals (model())

### Módulo 3: Routing y Navegación

- Clase 10: Routing Moderno con provideRouter
- Clase 11: Parámetros de Ruta y Query Params
- Clase 12: Guards y Lazy Loading

### Módulo 4: Formularios

- Clase 13: Template-driven Forms
- Clase 14: Reactive Forms Básicos
- Clase 15: Validaciones y Formularios Complejos

### Módulo 5: Servicios y HTTP

- Clase 16: Servicios con inject()
- Clase 17: HTTP Client y Consumo de APIs
- Clase 18: Interceptors y Manejo de Errores

### Módulo 6: Estado y Arquitectura

- Clase 19: Gestión de Estado con Signals
- Clase 20: Patrones de Arquitectura

### Módulo 7: Temas Avanzados

- Clase 21: Testing Básico
- Clase 22: Performance y Optimización
- Clase 23: Accesibilidad (a11y)
- Clase 24: Proyecto Final Integrador

---

## 📦 Configuración Inicial del Curso

### Extensiones Recomendadas para VS Code:

- **Angular Language Service** (obligatoria)
- **ESLint** (control de calidad)
- **Prettier** (formato de código)
- **Angular Snippets** (productividad)
- **Auto Rename Tag**
- **Error Lens** (visualización de errores)

### Configuración Inicial:

```bash
# Instalar Angular CLI
npm install -g @angular/cli@18

# Verificar versión (debe ser 18+)
ng version
```

---

# 📚 MÓDULO 1: FUNDAMENTOS

## Clase 1: Introducción a Angular y Configuración del Entorno

### ✅ Temario

- ¿Qué es Angular y por qué usarlo?
- Características de Angular 18
- Instalación y configuración del entorno
- Creación del primer proyecto

### 📚 Teoría

**¿Qué es Angular?**
Angular es un framework de desarrollo web creado por Google para construir aplicaciones SPA (Single Page Applications). En su versión 18, Angular ha modernizado significativamente su API con:

- **Signals**: Sistema de reactividad más simple y eficiente
- **Standalone Components**: No requieren módulos
- **Nuevas directivas de control de flujo**: @if, @for más legibles
- **Mejor rendimiento**: Cambio de detección más optimizado

**¿Por qué Angular 18?**

- Código más limpio y menos "boilerplate"
- Mejor rendimiento out-of-the-box
- TypeScript nativo con fuerte tipado
- Ecosistema maduro y gran comunidad

### 🛠️ Práctica Guiada

**Paso 1: Instalar Node.js**

```bash
# Verificar instalación (necesitas v18+)
node --version
npm --version
```

**Paso 2: Instalar Angular CLI**

```bash
npm install -g @angular/cli@18
```

**Paso 3: Crear proyecto**

```bash
# Crear nuevo proyecto
ng new mi-primera-app

# Durante la creación, selecciona:
# - ¿Quieres routing? → Yes
# - ¿Qué formato de estilos? → CSS (o tu preferencia)
```

**Paso 4: Ejecutar el proyecto**

```bash
cd mi-primera-app
ng serve

# Abre http://localhost:4200
```

**Paso 5: Explorar la estructura**

```
mi-primera-app/
├── src/
│   ├── app/              # Tu aplicación
│   │   ├── app.component.ts    # Componente principal
│   │   ├── app.component.html  # Template
│   │   ├── app.component.css   # Estilos
│   │   └── app.config.ts       # Configuración
│   ├── index.html        # HTML principal
│   └── main.ts           # Punto de entrada
├── angular.json          # Configuración de Angular
├── package.json          # Dependencias
└── tsconfig.json         # Configuración TypeScript
```

### 🧪 Ejercicios

1. **Instalación**: Instala Angular CLI y crea un proyecto llamado "practica-angular"
2. **Exploración**: Abre el proyecto en VS Code y ejecuta `ng serve`
3. **Modificación básica**: En `app.component.html`, elimina todo el contenido y escribe tu propio mensaje de bienvenida
4. **Experimentación**: Cambia el título en `app.component.ts` (propiedad `title`) y observa el cambio en el navegador

---

## Clase 2: Primer Componente y Estructura de un Proyecto

### ✅ Temario

- Anatomía de un componente standalone
- Creación de componentes con CLI
- Estructura de archivos recomendada
- Decorador @Component

### 📚 Teoría

**Componente Standalone en Angular 18**
Un componente es una pieza independiente de la UI. En Angular 18, los componentes son standalone por defecto, lo que significa que no necesitan módulos.

Estructura básica:

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-mi-componente", // Cómo se usa en HTML
  standalone: true, // No necesita módulo
  imports: [], // Dependencias que necesita
  templateUrl: "./mi-componente.component.html",
  styleUrl: "./mi-componente.component.css",
})
export class MiComponenteComponent {
  // Lógica del componente
}
```

**Convención de nombres:**

- Archivos: `nombre-componente.component.ts`
- Clase: `NombreComponenteComponent` (PascalCase)
- Selector: `app-nombre-componente` (kebab-case)

### 🛠️ Práctica Guiada

**Paso 1: Crear componente con CLI**

```bash
ng generate component components/header
# o abreviado:
ng g c components/header
```

Esto crea:

```
src/app/components/header/
├── header.component.ts
├── header.component.html
├── header.component.css
└── header.component.spec.ts
```

**Paso 2: Examinar el componente generado**

```typescript
// header.component.ts
import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  // Propiedades
  titulo = "Mi Aplicación";

  // Métodos
  saludar() {
    console.log("¡Hola desde el header!");
  }
}
```

**Paso 3: Usar el componente**

```typescript
// app.component.ts
import { Component } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HeaderComponent], // 👈 Importar componente
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "mi-primera-app";
}
```

```html
<!-- app.component.html -->
<app-header></app-header>
<main>
  <h1>Contenido principal</h1>
</main>
```

**Paso 4: Template inline vs archivo separado**

```typescript
// Opción 1: Template inline (para templates pequeños)
@Component({
  selector: 'app-boton',
  standalone: true,
  template: `<button>Click me</button>`,
  styles: [`button { background: blue; }`]
})

// Opción 2: Archivos separados (recomendado para templates mayores)
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
```

### 🧪 Ejercicios

1. **Crear componentes**: Crea tres componentes usando CLI:

   - `footer` (en carpeta components)
   - `navbar` (en carpeta components)
   - `card` (en carpeta components/card)

2. **Estructura**: En `card.component.ts`, añade propiedades:

   ```typescript
   titulo = "Tarjeta de ejemplo";
   descripcion = "Esta es una descripción";
   imagen = "https://via.placeholder.com/150";
   ```

3. **Usar componentes**: En `app.component.html`, usa todos los componentes creados:

   ```html
   <app-navbar></app-navbar>
   <app-card></app-card>
   <app-footer></app-footer>
   ```

4. **Experimentar**: Cambia el selector de uno de tus componentes y observa qué sucede. Luego reviértelo.

**Buena práctica:** Organiza componentes en carpetas por funcionalidad:

```
src/app/
├── components/
│   ├── layout/          # header, footer, navbar
│   ├── shared/          # card, button, modal
│   └── features/        # componentes específicos de funcionalidad
```

---

## Clase 3: Templates y Data Binding

### ✅ Temario

- Interpolación {{ }}
- Property binding [propiedad]
- Event binding (evento)
- Two-way binding [(ngModel)]
- Template expressions

### 📚 Teoría

**Data Binding** es la sincronización entre el componente (TypeScript) y la vista (HTML).

**Tipos de binding:**

1. **Interpolación** `{{ expresión }}`: Muestra datos en el template
2. **Property Binding** `[propiedad]="expresión"`: Vincula propiedad del DOM
3. **Event Binding** `(evento)="método()"`: Escucha eventos del DOM
4. **Two-way Binding** `[(ngModel)]="propiedad"`: Sincronización bidireccional

### 🛠️ Práctica Guiada

**Paso 1: Interpolación**

```typescript
// user.component.ts
export class UserComponent {
  nombre = "Ana García";
  edad = 25;
  estaActivo = true;

  obtenerSaludo() {
    return `¡Hola, ${this.nombre}!`;
  }
}
```

```html
<!-- user.component.html -->
<h2>{{ nombre }}</h2>
<p>Edad: {{ edad }}</p>
<p>Estado: {{ estaActivo ? 'Activo' : 'Inactivo' }}</p>
<p>{{ obtenerSaludo() }}</p>

<!-- Expresiones válidas -->
<p>{{ edad + 5 }}</p>
<p>{{ nombre.toUpperCase() }}</p>
```

**Paso 2: Property Binding**

```typescript
export class ImagenComponent {
  urlImagen = "https://via.placeholder.com/200";
  textoAlt = "Imagen de ejemplo";
  estaDeshabilitado = false;
}
```

```html
<!-- imagen.component.html -->
<!-- Binding de atributos HTML -->
<img [src]="urlImagen" [alt]="textoAlt" />

<!-- Binding de propiedades del elemento -->
<button [disabled]="estaDeshabilitado">Enviar</button>

<!-- Binding de clases CSS -->
<div [class.activo]="estaActivo">Contenido</div>

<!-- Binding de estilos -->
<p [style.color]="estaActivo ? 'green' : 'red'">Texto</p>
```

**Paso 3: Event Binding**

```typescript
export class ContadorComponent {
  contador = 0;

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }

  resetear() {
    this.contador = 0;
  }

  manejarInput(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    console.log("Input:", valor);
  }
}
```

```html
<!-- contador.component.html -->
<div>
  <h3>Contador: {{ contador }}</h3>
  <button (click)="incrementar()">+1</button>
  <button (click)="decrementar()">-1</button>
  <button (click)="resetear()">Reset</button>
</div>

<!-- Otros eventos -->
<input (input)="manejarInput($event)" placeholder="Escribe algo" />
<div (mouseenter)="handleMouseEnter()" (mouseleave)="handleMouseLeave()">Pasa el ratón aquí</div>
```

**Paso 4: Two-way Binding**

```typescript
// Necesitas importar FormsModule
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-formulario",
  standalone: true,
  imports: [FormsModule], // 👈 Importante
  templateUrl: "./formulario.component.html",
})
export class FormularioComponent {
  nombreUsuario = "";
  email = "";
}
```

```html
<!-- formulario.component.html -->
<div>
  <label>Nombre:</label>
  <input [(ngModel)]="nombreUsuario" placeholder="Tu nombre" />
  <p>Hola, {{ nombreUsuario }}!</p>
</div>

<div>
  <label>Email:</label>
  <input [(ngModel)]="email" type="email" />
  <p>Tu email es: {{ email }}</p>
</div>
```

**Paso 5: Ejemplo completo**

```typescript
// profile.component.ts
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-profile",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./profile.component.html",
  styleUrl: "./profile.component.css",
})
export class ProfileComponent {
  // Datos del usuario
  nombre = "Usuario";
  edad = 0;
  biografia = "";
  imagenPerfil = "https://via.placeholder.com/100";

  // Estados
  modoEdicion = false;

  // Métodos
  toggleEdicion() {
    this.modoEdicion = !this.modoEdicion;
  }

  guardarCambios() {
    this.modoEdicion = false;
    console.log("Perfil guardado:", {
      nombre: this.nombre,
      edad: this.edad,
      biografia: this.biografia,
    });
  }
}
```

```html
<!-- profile.component.html -->
<div class="perfil">
  <img [src]="imagenPerfil" [alt]="nombre" />

  @if (!modoEdicion) {
  <h2>{{ nombre }}</h2>
  <p>Edad: {{ edad }} años</p>
  <p>{{ biografia }}</p>
  <button (click)="toggleEdicion()">Editar Perfil</button>
  } @else {
  <input [(ngModel)]="nombre" placeholder="Nombre" />
  <input [(ngModel)]="edad" type="number" placeholder="Edad" />
  <textarea [(ngModel)]="biografia" placeholder="Biografía"></textarea>
  <button (click)="guardarCambios()">Guardar</button>
  <button (click)="toggleEdicion()">Cancelar</button>
  }
</div>
```

### 🧪 Ejercicios

1. **Calculadora simple**: Crea un componente con:

   - Dos inputs numéricos con [(ngModel)]
   - Botones para sumar, restar, multiplicar y dividir
   - Muestra el resultado con interpolación

2. **Lista de tareas**: Crea un componente que:

   - Tenga un input para añadir tareas
   - Un botón que añada la tarea al array
   - Muestre las tareas (usa @for que verás en la próxima clase)

3. **Selector de colores**: Crea un componente con:

   - Input type="color" con [(ngModel)]
   - Un div cuyo color de fondo cambie según el color seleccionado
   - Muestra el código hexadecimal del color

4. **Contador de clicks**: Crea un botón que:
   - Cuente cuántas veces se ha clickeado
   - Cambie de color después de 5 clicks
   - Se deshabilite después de 10 clicks

---

## Clase 4: Directivas Modernas (@if, @for, @switch)

### ✅ Temario

- Directiva @if (reemplaza \*ngIf)
- Directiva @for (reemplaza \*ngFor)
- Directiva @switch (reemplaza \*ngSwitch)
- Ventajas de las nuevas directivas

### 📚 Teoría

Angular 18 introduce **nuevas directivas de control de flujo** más legibles y con mejor rendimiento que las anteriores (*ngIf, *ngFor, etc.).

**Ventajas:**

- Sintaxis más clara y natural
- Mejor rendimiento en tiempo de compilación
- Mejor experiencia con TypeScript (autocompletado, type checking)
- Sintaxis consistente con otros frameworks modernos

**@if vs \*ngIf:**

```html
<!-- Antiguo -->
<div *ngIf="mostrar">Contenido</div>

<!-- Moderno (Angular 18) -->
@if (mostrar) {
<div>Contenido</div>
}
```

### 🛠️ Práctica Guiada

**Paso 1: Directiva @if básica**

```typescript
// auth.component.ts
export class AuthComponent {
  usuarioLogueado = false;
  nombreUsuario = "Ana";

  login() {
    this.usuarioLogueado = true;
  }

  logout() {
    this.usuarioLogueado = false;
  }
}
```

```html
<!-- auth.component.html -->
@if (usuarioLogueado) {
<div>
  <p>Bienvenido, {{ nombreUsuario }}</p>
  <button (click)="logout()">Cerrar Sesión</button>
</div>
} @else {
<div>
  <p>Por favor, inicia sesión</p>
  <button (click)="login()">Iniciar Sesión</button>
</div>
}
```

**Paso 2: @if con múltiples condiciones**

```typescript
export class EstadoComponent {
  estado: "cargando" | "exitoso" | "error" | null = null;

  cargar() {
    this.estado = "cargando";
    setTimeout(() => {
      this.estado = Math.random() > 0.5 ? "exitoso" : "error";
    }, 2000);
  }
}
```

```html
<!-- estado.component.html -->
@if (estado === 'cargando') {
<p>Cargando datos...</p>
} @else if (estado === 'exitoso') {
<p>✅ Datos cargados correctamente</p>
} @else if (estado === 'error') {
<p>❌ Error al cargar datos</p>
} @else {
<button (click)="cargar()">Cargar Datos</button>
}
```

**Paso 3: Directiva @for**

```typescript
// lista-tareas.component.ts
export class ListaTareasComponent {
  tareas = [
    { id: 1, texto: "Aprender Angular", completada: false },
    { id: 2, texto: "Crear componentes", completada: true },
    { id: 3, texto: "Dominar directivas", completada: false },
  ];

  toggleTarea(id: number) {
    const tarea = this.tareas.find((t) => t.id === id);
    if (tarea) {
      tarea.completada = !tarea.completada;
    }
  }
}
```

```html
<!-- lista-tareas.component.html -->
<ul>
  @for (tarea of tareas; track tarea.id) {
  <li [class.completada]="tarea.completada">
    <input type="checkbox" [checked]="tarea.completada" (change)="toggleTarea(tarea.id)" />
    {{ tarea.texto }}
  </li>
  }
</ul>
```

**⚠️ Importante: La propiedad `track` es obligatoria en @for**

- Mejora el rendimiento al re-renderizar
- Angular sabe qué elementos cambiar sin recrear todo
- Usa una propiedad única (típicamente `id`)

**Paso 4: @for con índice y empty**

```typescript
export class ProductosComponent {
  productos = [
    { id: 1, nombre: "Laptop", precio: 999 },
    { id: 2, nombre: "Mouse", precio: 25 },
    { id: 3, nombre: "Teclado", precio: 75 },
  ];
}
```

```html
<!-- productos.component.html -->
<div>
  @for (producto of productos; track producto.id; let i = $index) {
  <div class="producto">
    <span class="numero">{{ i + 1 }}.</span>
    <h3>{{ producto.nombre }}</h3>
    <p>Precio: ${{ producto.precio }}</p>
  </div>
  } @empty {
  <p>No hay productos disponibles</p>
  }
</div>
```

**Variables disponibles en @for:**

- `$index`: índice actual (0-based)
- `$first`: true si es el primer elemento
- `$last`: true si es el último elemento
- `$even`: true si el índice es par
- `$odd`: true si el índice es impar
- `$count`: total de elementos

```html
@for (item of items; track item.id; let idx = $index; let primero = $first) {
<div [class.primer-elemento]="primero">{{ idx }}: {{ item.nombre }}</div>
}
```

**Paso 5: Directiva @switch**

```typescript
export class PlanComponent {
  planSeleccionado: "basico" | "premium" | "enterprise" = "basico";

  seleccionarPlan(plan: "basico" | "premium" | "enterprise") {
    this.planSeleccionado = plan;
  }
}
```

```html
<!-- plan.component.html -->
<div>
  <button (click)="seleccionarPlan('basico')">Básico</button>
  <button (click)="seleccionarPlan('premium')">Premium</button>
  <button (click)="seleccionarPlan('enterprise')">Enterprise</button>
</div>

@switch (planSeleccionado) { @case ('basico') {
<div class="plan basico">
  <h3>Plan Básico</h3>
  <p>$9.99/mes</p>
  <ul>
    <li>5 usuarios</li>
    <li>10GB almacenamiento</li>
  </ul>
</div>
} @case ('premium') {
<div class="plan premium">
  <h3>Plan Premium</h3>
  <p>$19.99/mes</p>
  <ul>
    <li>25 usuarios</li>
    <li>100GB almacenamiento</li>
    <li>Soporte prioritario</li>
  </ul>
</div>
} @case ('enterprise') {
<div class="plan enterprise">
  <h3>Plan Enterprise</h3>
  <p>Precio personalizado</p>
  <ul>
    <li>Usuarios ilimitados</li>
    <li>Almacenamiento ilimitado</li>
    <li>Soporte 24/7</li>
  </ul>
</div>
} @default {
<p>Selecciona un plan</p>
} }
```

**Paso 6: Combinando directivas**

```typescript
export class DashboardComponent {
  usuarios = [
    { id: 1, nombre: "Ana", rol: "admin", activo: true },
    { id: 2, nombre: "Luis", rol: "user", activo: false },
    { id: 3, nombre: "María", rol: "moderador", activo: true },
  ];

  filtroActivos = true;

  get usuariosFiltrados() {
    return this.filtroActivos ? this.usuarios.filter((u) => u.activo) : this.usuarios;
  }
}
```

```html
<!-- dashboard.component.html -->
<label>
  <input type="checkbox" [(ngModel)]="filtroActivos" />
  Mostrar solo activos
</label>

<div class="usuarios">
  @for (usuario of usuariosFiltrados; track usuario.id) {
  <div class="usuario-card">
    <h4>{{ usuario.nombre }}</h4>

    @switch (usuario.rol) { @case ('admin') {
    <span class="badge admin">👑 Administrador</span>
    } @case ('moderador') {
    <span class="badge mod">🛡️ Moderador</span>
    } @default {
    <span class="badge user">👤 Usuario</span>
    } } @if (usuario.activo) {
    <span class="estado activo">✅ Activo</span>
    } @else {
    <span class="estado inactivo">⭕ Inactivo</span>
    }
  </div>
  } @empty {
  <p>No hay usuarios que mostrar</p>
  }
</div>
```

### 🧪 Ejercicios

1. **Mostrador de mensajes**: Crea un componente que:

   - Tenga un array de mensajes (con id, texto, tipo: 'info' | 'warning' | 'error')
   - Use @for para mostrar todos los mensajes
   - Use @switch para mostrar diferentes íconos según el tipo
   - Permita eliminar mensajes

2. **Lista de compras**: Crea un componente con:

   - Un input para añadir artículos
   - Una lista que use @for para mostrar artículos
   - Checkbox para marcar como comprado
   - Muestra "Lista vacía" con @empty cuando no hay artículos
   - Muestra total de artículos y cuántos están comprados

3. **Selector de modo**: Crea un componente que:

   - Tenga tres modos: 'claro', 'oscuro', 'automático'
   - Use @switch para aplicar diferentes clases CSS
   - Muestre diferentes mensajes según el modo seleccionado

4. **Galería con filtros**: Crea una galería que:
   - Tenga un array de imágenes (con id, url, categoría)
   - Permita filtrar por categoría
   - Use @for para mostrar las imágenes filtradas
   - Muestre el índice de cada imagen con `$index`
   - Muestre mensaje con @empty si no hay resultados

---

## Clase 5: Eventos y Comunicación Básica

### ✅ Temario

- Manejo avanzado de eventos
- Paso de parámetros en eventos
- Event object ($event)
- Template reference variables (#variable)
- Comunicación padre-hijo básica con @Input

### 📚 Teoría

**Eventos en Angular:**
Los eventos permiten que el usuario interactúe con la aplicación. Angular proporciona una sintaxis sencilla para vincular eventos del DOM a métodos del componente.

**Template Reference Variables:**
Son referencias locales a elementos del DOM que puedes usar en el template:

```html
<input #miInput /> <button (click)="procesar(miInput.value)">Enviar</button>
```

**@Input() básico:**
Permite que un componente padre pase datos a un componente hijo (lo veremos en profundidad con signals en clases posteriores).

### 🛠️ Práctica Guiada

**Paso 1: Eventos comunes del DOM**

```typescript
// eventos.component.ts
export class EventosComponent {
  mensaje = "";
  posicionMouse = { x: 0, y: 0 };
  textoCopiado = "";

  handleClick() {
    this.mensaje = "Botón clickeado!";
  }

  handleDoubleClick() {
    this.mensaje = "Doble click detectado!";
  }

  handleMouseMove(event: MouseEvent) {
    this.posicionMouse = {
      x: event.clientX,
      y: event.clientY,
    };
  }

  handleCopy(event: ClipboardEvent) {
    this.textoCopiado = "Texto copiado al portapapeles";
    setTimeout(() => (this.textoCopiado = ""), 2000);
  }

  handleKeydown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      console.log("Enter presionado");
    }
  }
}
```

```html
<!-- eventos.component.html -->
<div>
  <!-- Click events -->
  <button (click)="handleClick()">Click</button>
  <button (dblclick)="handleDoubleClick()">Doble Click</button>
  <p>{{ mensaje }}</p>

  <!-- Mouse events -->
  <div class="mouse-tracker" (mousemove)="handleMouseMove($event)">
    Mueve el ratón aquí
    <p>X: {{ posicionMouse.x }}, Y: {{ posicionMouse.y }}</p>
  </div>

  <!-- Keyboard events -->
  <input (keydown)="handleKeydown($event)" placeholder="Presiona Enter" />

  <!-- Copy event -->
  <p (copy)="handleCopy($event)">Selecciona y copia este texto</p>
  <p>{{ textoCopiado }}</p>
</div>
```

**Paso 2: Template Reference Variables**

```typescript
// formulario-avanzado.component.ts
export class FormularioAvanzadoComponent {
  resultado = "";

  procesar(valor: string) {
    this.resultado = `Procesado: ${valor}`;
  }

  sumar(num1: string, num2: string) {
    const suma = parseFloat(num1) + parseFloat(num2);
    this.resultado = `Resultado: ${suma}`;
  }

  limpiarInput(input: HTMLInputElement) {
    input.value = "";
    input.focus();
  }
}
```

```html
<!-- formulario-avanzado.component.html -->
<div>
  <!-- Referencia simple -->
  <input #miInput placeholder="Escribe algo" />
  <button (click)="procesar(miInput.value)">Procesar</button>
  <button (click)="limpiarInput(miInput)">Limpiar</button>

  <!-- Múltiples referencias -->
  <div>
    <input #num1 type="number" placeholder="Número 1" />
    <input #num2 type="number" placeholder="Número 2" />
    <button (click)="sumar(num1.value, num2.value)">Sumar</button>
  </div>

  <p>{{ resultado }}</p>

  <!-- Autoenfoque -->
  <input #autoFocus placeholder="Este input tiene autofocus" />
  <button (click)="autoFocus.focus()">Enfocar input</button>
</div>
```

**Paso 3: Prevenir comportamiento por defecto**

```typescript
export class FormularioComponent {
  datos = { nombre: "", email: "" };

  enviarFormulario(event: Event) {
    event.preventDefault(); // Prevenir recarga de página
    console.log("Formulario enviado:", this.datos);
  }

  handleContextMenu(event: MouseEvent) {
    event.preventDefault(); // Prevenir menú contextual
    console.log("Click derecho bloqueado");
  }
}
```

```html
<!-- formulario.component.html -->
<form (submit)="enviarFormulario($event)">
  <input [(ngModel)]="datos.nombre" name="nombre" placeholder="Nombre" />
  <input [(ngModel)]="datos.email" name="email" placeholder="Email" />
  <button type="submit">Enviar</button>
</form>

<div (contextmenu)="handleContextMenu($event)">Click derecho deshabilitado aquí</div>
```

**Paso 4: Comunicación Padre-Hijo con @Input**

```typescript
// Componente Hijo: tarjeta-usuario.component.ts
import { Component, Input } from "@angular/core";

interface Usuario {
  nombre: string;
  email: string;
  avatar: string;
}

@Component({
  selector: "app-tarjeta-usuario",
  standalone: true,
  template: `
    <div class="tarjeta">
      <img [src]="usuario.avatar" [alt]="usuario.nombre" />
      <h3>{{ usuario.nombre }}</h3>
      <p>{{ usuario.email }}</p>
      @if (mostrarDetalles) {
      <div class="detalles">
        <p>Detalles adicionales aquí</p>
      </div>
      }
    </div>
  `,
  styles: [
    `
      .tarjeta {
        border: 1px solid #ddd;
        padding: 1rem;
        border-radius: 8px;
        margin: 0.5rem;
      }
      img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
      }
    `,
  ],
})
export class TarjetaUsuarioComponent {
  @Input() usuario!: Usuario; // ! indica que será inicializado
  @Input() mostrarDetalles = false;
}
```

```typescript
// Componente Padre: lista-usuarios.component.ts
import { Component } from "@angular/core";
import { TarjetaUsuarioComponent } from "./tarjeta-usuario.component";

@Component({
  selector: "app-lista-usuarios",
  standalone: true,
  imports: [TarjetaUsuarioComponent],
  template: `
    <div class="lista">
      <h2>Lista de Usuarios</h2>

      @for (user of usuarios; track user.email) {
      <app-tarjeta-usuario [usuario]="user" [mostrarDetalles]="true"> </app-tarjeta-usuario>
      }
    </div>
  `,
})
export class ListaUsuariosComponent {
  usuarios = [
    {
      nombre: "Ana García",
      email: "ana@example.com",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      nombre: "Luis Martínez",
      email: "luis@example.com",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      nombre: "María López",
      email: "maria@example.com",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ];
}
```

**Paso 5: @Input con valores por defecto**

```typescript
// boton.component.ts
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-boton",
  standalone: true,
  template: `
    <button [class]="'btn btn-' + tipo" [disabled]="deshabilitado">
      {{ texto }}
    </button>
  `,
  styles: [
    `
      .btn {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
      .btn-primary {
        background: #007bff;
        color: white;
      }
      .btn-secondary {
        background: #6c757d;
        color: white;
      }
      .btn-danger {
        background: #dc3545;
        color: white;
      }
      .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    `,
  ],
})
export class BotonComponent {
  @Input() texto = "Click aquí"; // Valor por defecto
  @Input() tipo: "primary" | "secondary" | "danger" = "primary";
  @Input() deshabilitado = false;
}
```

```typescript
// uso del componente
import { Component } from "@angular/core";
import { BotonComponent } from "./boton.component";

@Component({
  selector: "app-panel",
  standalone: true,
  imports: [BotonComponent],
  template: `
    <div>
      <!-- Usando valores por defecto -->
      <app-boton></app-boton>

      <!-- Personalizando propiedades -->
      <app-boton texto="Guardar" tipo="primary"> </app-boton>

      <app-boton texto="Cancelar" tipo="secondary"> </app-boton>

      <app-boton texto="Eliminar" tipo="danger" [deshabilitado]="true"> </app-boton>
    </div>
  `,
})
export class PanelComponent {}
```

**Paso 6: Event Bubbling y stopPropagation**

```typescript
export class BubblingComponent {
  handlePadreClick() {
    console.log("Click en contenedor padre");
  }

  handleHijoClick(event: Event) {
    event.stopPropagation(); // Detiene la propagación
    console.log("Click en hijo - no se propaga al padre");
  }

  handleNormalClick() {
    console.log("Click normal - se propaga");
  }
}
```

```html
<div (click)="handlePadreClick()" class="padre">
  Contenedor Padre

  <button (click)="handleNormalClick()">Click normal (se propaga)</button>

  <button (click)="handleHijoClick($event)">Click sin propagación</button>
</div>
```

### 🧪 Ejercicios

1. **Contador interactivo**: Crea un componente con:

   - Botones para incrementar/decrementar
   - Input para establecer el valor directamente usando template reference
   - Botón que use la referencia para resetear el contador
   - Detecta cuando se presiona "r" para resetear

2. **Tarjeta de producto**: Crea dos componentes:

   - `ProductoComponent` (hijo) que reciba vía @Input:
     - nombre: string
     - precio: number
     - imagen: string
     - disponible: boolean
   - `CatalogoComponent` (padre) que:
     - Tenga un array de productos
     - Use @for para mostrar múltiples ProductoComponent
     - Pase los datos a cada tarjeta

3. **Formulario con validación visual**: Crea un formulario que:

   - Use template references para acceder a los inputs
   - Valide email en tiempo real (keyup event)
   - Muestre longitud del texto mientras escribes
   - Prevenga el submit si hay errores
   - Limpie todos los campos con un botón usando referencias

4. **Menú contextual personalizado**: Crea un componente que:
   - Capture el evento contextmenu (click derecho)
   - Prevenga el menú por defecto
   - Muestre un menú personalizado en la posición del mouse
   - Se cierre al hacer click fuera (document click event)

**Buenas prácticas de esta clase:**

- Siempre tipar el evento ($event: MouseEvent, KeyboardEvent, etc.)
- Usar template references para operaciones simples del DOM
- @Input hace componentes reutilizables
- Nombrar eventos de forma descriptiva (handle*, on*)

---

# 📚 MÓDULO 2: REACTIVIDAD MODERNA

## Clase 6: Introducción a Signals

### ✅ Temario

- ¿Qué son los Signals?
- Diferencias con las variables tradicionales
- Creación y lectura de signals
- Actualización de signals (set, update)
- Ventajas de signals sobre variables normales

### 📚 Teoría

**¿Qué son los Signals?**
Signals son el nuevo sistema de reactividad de Angular 18. Son contenedores de valores que notifican automáticamente a Angular cuando cambian, permitiendo actualizaciones más eficientes y predecibles.

**Ventajas sobre variables tradicionales:**

- ✅ Reactividad automática y granular
- ✅ Mejor rendimiento (sin Zone.js)
- ✅ Cambio de detección más preciso
- ✅ Composición más clara con computed y effect
- ✅ Sintaxis más declarativa

**Anatomía básica:**

```typescript
import { signal } from "@angular/core";

// Crear signal
contador = signal(0);

// Leer signal (con paréntesis)
const valor = this.contador();

// Actualizar signal
this.contador.set(5); // Establecer valor
this.contador.update((v) => v + 1); // Actualizar basado en valor anterior
```

### 🛠️ Práctica Guiada

**Paso 1: Crear tu primer signal**

```typescript
// contador-signal.component.ts
import { Component, signal } from "@angular/core";

@Component({
  selector: "app-contador-signal",
  standalone: true,
  template: `
    <div class="contador">
      <h2>Contador: {{ contador() }}</h2>
      <button (click)="incrementar()">+1</button>
      <button (click)="decrementar()">-1</button>
      <button (click)="resetear()">Reset</button>
      <button (click)="establecer(100)">Set 100</button>
    </div>
  `,
  styles: [
    `
      .contador {
        padding: 2rem;
        text-align: center;
      }
      button {
        margin: 0.5rem;
        padding: 0.5rem 1rem;
      }
    `,
  ],
})
export class ContadorSignalComponent {
  // Signal con valor inicial
  contador = signal(0);

  incrementar() {
    // update: recibe función con valor actual
    this.contador.update((valor) => valor + 1);
  }

  decrementar() {
    this.contador.update((valor) => valor - 1);
  }

  resetear() {
    // set: establece valor directamente
    this.contador.set(0);
  }

  establecer(nuevoValor: number) {
    this.contador.set(nuevoValor);
  }
}
```

**Importante:** En el template, siempre llama al signal con `()`: `{{ contador() }}`

**Paso 2: Signals con objetos**

```typescript
// perfil-signal.component.ts
import { Component, signal } from "@angular/core";

interface Usuario {
  nombre: string;
  edad: number;
  email: string;
}

@Component({
  selector: "app-perfil-signal",
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="perfil">
      <h2>{{ usuario().nombre }}</h2>
      <p>Edad: {{ usuario().edad }}</p>
      <p>Email: {{ usuario().email }}</p>

      <div>
        <h3>Editar Perfil</h3>
        <input [value]="usuario().nombre" (input)="actualizarNombre($any($event.target).value)" />

        <input type="number" [value]="usuario().edad" (input)="actualizarEdad(+$any($event.target).value)" />

        <button (click)="cumplirAnios()">🎂 Cumplir Años</button>
      </div>
    </div>
  `,
})
export class PerfilSignalComponent {
  usuario = signal<Usuario>({
    nombre: "Ana García",
    edad: 25,
    email: "ana@example.com",
  });

  actualizarNombre(nombre: string) {
    // Actualizar propiedad específica del objeto
    this.usuario.update((user) => ({
      ...user,
      nombre,
    }));
  }

  actualizarEdad(edad: number) {
    this.usuario.update((user) => ({
      ...user,
      edad,
    }));
  }

  cumplirAnios() {
    this.usuario.update((user) => ({
      ...user,
      edad: user.edad + 1,
    }));
  }
}
```

**⚠️ Importante con objetos:** Siempre retorna un nuevo objeto (inmutabilidad)

```typescript
// ❌ MAL - Mutación directa
this.usuario().edad = 26; // No funciona

// ✅ BIEN - Crear nuevo objeto
this.usuario.update((u) => ({ ...u, edad: 26 }));
```

**Paso 3: Signals con arrays**

```typescript
// lista-tareas-signal.component.ts
import { Component, signal } from "@angular/core";

interface Tarea {
  id: number;
  texto: string;
  completada: boolean;
}

@Component({
  selector: "app-lista-tareas-signal",
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="tareas">
      <h2>Tareas ({{ tareas().length }})</h2>

      <div>
        <input #inputTarea placeholder="Nueva tarea" (keyup.enter)="agregarTarea(inputTarea.value); inputTarea.value = ''" />
        <button (click)="agregarTarea(inputTarea.value); inputTarea.value = ''">Agregar</button>
      </div>

      <ul>
        @for (tarea of tareas(); track tarea.id) {
        <li [class.completada]="tarea.completada">
          <input type="checkbox" [checked]="tarea.completada" (change)="toggleTarea(tarea.id)" />
          <span>{{ tarea.texto }}</span>
          <button (click)="eliminarTarea(tarea.id)">🗑️</button>
        </li>
        } @empty {
        <li>No hay tareas</li>
        }
      </ul>

      <button (click)="limpiarCompletadas()">Limpiar completadas</button>
    </div>
  `,
  styles: [
    `
      .completada {
        text-decoration: line-through;
        opacity: 0.6;
      }
    `,
  ],
})
export class ListaTareasSignalComponent {
  tareas = signal<Tarea[]>([]);
  siguienteId = 1;

  agregarTarea(texto: string) {
    if (!texto.trim()) return;

    this.tareas.update((tareas) => [
      ...tareas,
      {
        id: this.siguienteId++,
        texto: texto.trim(),
        completada: false,
      },
    ]);
  }

  toggleTarea(id: number) {
    this.tareas.update((tareas) => tareas.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t)));
  }

  eliminarTarea(id: number) {
    this.tareas.update((tareas) => tareas.filter((t) => t.id !== id));
  }

  limpiarCompletadas() {
    this.tareas.update((tareas) => tareas.filter((t) => !t.completada));
  }
}
```

**Paso 4: Comparación signals vs variables tradicionales**

```typescript
// comparacion.component.ts
import { Component, signal } from "@angular/core";

@Component({
  selector: "app-comparacion",
  standalone: true,
  template: `
    <div class="comparacion">
      <div class="variable-tradicional">
        <h3>Variable Tradicional</h3>
        <p>Valor: {{ contadorTradicional }}</p>
        <button (click)="incrementarTradicional()">+1</button>
        <p><small>Requiere Change Detection completo</small></p>
      </div>

      <div class="signal">
        <h3>Signal</h3>
        <p>Valor: {{ contadorSignal() }}</p>
        <button (click)="incrementarSignal()">+1</button>
        <p><small>Change Detection granular y optimizado</small></p>
      </div>
    </div>
  `,
})
export class ComparacionComponent {
  // Variable tradicional
  contadorTradicional = 0;

  // Signal
  contadorSignal = signal(0);

  incrementarTradicional() {
    this.contadorTradicional++;
    // Angular revisa TODO el componente y sus hijos
  }

  incrementarSignal() {
    this.contadorSignal.update((v) => v + 1);
    // Angular solo actualiza lo que usa este signal
  }
}
```

**Paso 5: Signals con tipos complejos**

```typescript
// carrito-signal.component.ts
import { Component, signal } from "@angular/core";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}

@Component({
  selector: "app-carrito-signal",
  standalone: true,
  template: `
    <div class="carrito">
      <h2>Carrito de Compras</h2>

      @for (item of items(); track item.producto.id) {
      <div class="item">
        <span>{{ item.producto.nombre }}</span>
        <span>\${{ item.producto.precio }}</span>
        <button (click)="decrementar(item.producto.id)">-</button>
        <span>{{ item.cantidad }}</span>
        <button (click)="incrementar(item.producto.id)">+</button>
        <button (click)="eliminar(item.producto.id)">🗑️</button>
      </div>
      } @empty {
      <p>Carrito vacío</p>
      } @if (items().length > 0) {
      <div class="total">
        <strong>Total: \${{ calcularTotal() }}</strong>
      </div>
      }
    </div>
  `,
})
export class CarritoSignalComponent {
  items = signal<ItemCarrito[]>([
    {
      producto: { id: 1, nombre: "Laptop", precio: 999 },
      cantidad: 1,
    },
    {
      producto: { id: 2, nombre: "Mouse", precio: 25 },
      cantidad: 2,
    },
  ]);

  incrementar(id: number) {
    this.items.update((items) => items.map((item) => (item.producto.id === id ? { ...item, cantidad: item.cantidad + 1 } : item)));
  }

  decrementar(id: number) {
    this.items.update((items) => items.map((item) => (item.producto.id === id && item.cantidad > 1 ? { ...item, cantidad: item.cantidad - 1 } : item)));
  }

  eliminar(id: number) {
    this.items.update((items) => items.filter((item) => item.producto.id !== id));
  }

  calcularTotal(): number {
    return this.items().reduce((total, item) => total + item.producto.precio * item.cantidad, 0);
  }
}
```

### 🧪 Ejercicios

1. **Formulario de registro con signals**: Crea un componente con signals para:

   - nombre, email, contraseña
   - Muestra los valores en tiempo real
   - Botón que limpie todos los campos (resetea los signals)
   - Muestra si todos los campos están completos

2. **Gestor de favoritos**: Crea un componente con:

   - Signal con array de películas (id, título, año)
   - Función para agregar película
   - Función para eliminar película
   - Función para marcar/desmarcar como vista
   - Muestra contador de películas totales y vistas

3. **Configuración de tema**: Crea un componente con signal para:

   - tema: object con {modo: 'claro' | 'oscuro', tamaño: number, fuente: string}
   - Botones para cambiar cada propiedad
   - Muestra la configuración actual
   - Botón para resetear a valores por defecto

4. **Temporizador con signals**: Crea un temporizador que:
   - Use signal para los segundos
   - Botones: iniciar, pausar, resetear
   - Use setInterval para actualizar el signal
   - Muestra el tiempo en formato MM:SS

**Puntos clave de esta clase:**

- Signals son el futuro de la reactividad en Angular
- Siempre lee con `()`: `contador()`
- Actualiza con `set()` o `update()`
- Con objetos/arrays, retorna nuevas instancias (inmutabilidad)
- Mejor rendimiento que variables tradicionales

---

## Clase 7: Computed Signals y Effects

### ✅ Temario

- Computed signals: valores derivados
- Diferencia entre computed y métodos
- Effects: reaccionar a cambios de signals
- Cuándo usar effects
- Cleanup de effects

### 📚 Teoría

**Computed Signals:**
Son signals que derivan su valor de otros signals. Se recalculan automáticamente cuando sus dependencias cambian, y cachean el resultado.

```typescript
import { signal, computed } from "@angular/core";

cantidad = signal(5);
precio = signal(10);

// Se recalcula automáticamente
total = computed(() => this.cantidad() * this.precio());
```

**Effects:**
Permiten ejecutar código cuando los signals cambian. Útiles para efectos secundarios (logs, localStorage, analytics).

```typescript
import { effect } from '@angular/core';

constructor() {
  effect(() => {
    console.log('Contador cambió a:', this.contador());
  });
}
```

### 🛠️ Práctica Guiada

**Paso 1: Computed signals básicos**

```typescript
// calculadora-signal.component.ts
import { Component, signal, computed } from "@angular/core";

@Component({
  selector: "app-calculadora-signal",
  standalone: true,
  template: `
    <div class="calculadora">
      <h2>Calculadora con Computed</h2>

      <div>
        <label>Número 1:</label>
        <input type="number" [value]="num1()" (input)="num1.set(+$any($event.target).value)" />
      </div>

      <div>
        <label>Número 2:</label>
        <input type="number" [value]="num2()" (input)="num2.set(+$any($event.target).value)" />
      </div>

      <div class="resultados">
        <p>Suma: {{ suma() }}</p>
        <p>Resta: {{ resta() }}</p>
        <p>Multiplicación: {{ multiplicacion() }}</p>
        <p>División: {{ division() }}</p>
      </div>
    </div>
  `,
})
export class CalculadoraSignalComponent {
  num1 = signal(0);
  num2 = signal(0);

  // Computed signals - se recalculan automáticamente
  suma = computed(() => this.num1() + this.num2());
  resta = computed(() => this.num1() - this.num2());
  multiplicacion = computed(() => this.num1() * this.num2());
  division = computed(() => {
    const divisor = this.num2();
    return divisor !== 0 ? this.num1() / divisor : "No se puede dividir por 0";
  });
}
```

**Paso 2: Computed con lógica compleja**

```typescript
// carrito-computed.component.ts
import { Component, signal, computed } from "@angular/core";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
  descuento: number; // porcentaje
}

@Component({
  selector: "app-carrito-computed",
  standalone: true,
  template: `
    <div class="carrito">
      <h2>Carrito con Computed Signals</h2>

      @for (producto of productos(); track producto.id) {
      <div class="producto">
        <h3>{{ producto.nombre }}</h3>
        <p>Precio: \${{ producto.precio }}</p>
        <p>Cantidad: {{ producto.cantidad }}</p>
        <p>Descuento: {{ producto.descuento }}%</p>
        <button (click)="incrementarCantidad(producto.id)">+</button>
        <button (click)="decrementarCantidad(producto.id)">-</button>
      </div>
      }

      <div class="resumen">
        <h3>Resumen</h3>
        <p>Total items: {{ totalItems() }}</p>
        <p>Subtotal: \${{ subtotal().toFixed(2) }}</p>
        <p>Descuento total: \${{ descuentoTotal().toFixed(2) }}</p>
        <p>IVA (21%): \${{ iva().toFixed(2) }}</p>
        <p>
          <strong>TOTAL: \${{ total().toFixed(2) }}</strong>
        </p>
        <p class="ahorro">Ahorras: \${{ descuentoTotal().toFixed(2) }}</p>
      </div>
    </div>
  `,
})
export class CarritoComputedComponent {
  productos = signal<Producto[]>([
    { id: 1, nombre: "Laptop", precio: 1000, cantidad: 1, descuento: 10 },
    { id: 2, nombre: "Mouse", precio: 50, cantidad: 2, descuento: 5 },
    { id: 3, nombre: "Teclado", precio: 80, cantidad: 1, descuento: 0 },
  ]);

  // Computed: total de items
  totalItems = computed(() => this.productos().reduce((sum, p) => sum + p.cantidad, 0));

  // Computed: subtotal antes de descuentos
  subtotal = computed(() => this.productos().reduce((sum, p) => sum + p.precio * p.cantidad, 0));

  // Computed: descuento total
  descuentoTotal = computed(() => this.productos().reduce((sum, p) => sum + (p.precio * p.cantidad * p.descuento) / 100, 0));

  // Computed: subtotal con descuento
  subtotalConDescuento = computed(() => this.subtotal() - this.descuentoTotal());

  // Computed: IVA sobre subtotal con descuento
  iva = computed(() => this.subtotalConDescuento() * 0.21);

  // Computed: total final
  total = computed(() => this.subtotalConDescuento() + this.iva());

  incrementarCantidad(id: number) {
    this.productos.update((productos) => productos.map((p) => (p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p)));
  }

  decrementarCantidad(id: number) {
    this.productos.update((productos) => productos.map((p) => (p.id === id && p.cantidad > 1 ? { ...p, cantidad: p.cantidad - 1 } : p)));
  }
}
```

**Paso 3: Effects básicos**

```typescript
// logger.component.ts
import { Component, signal, effect } from "@angular/core";

@Component({
  selector: "app-logger",
  standalone: true,
  template: `
    <div class="logger">
      <h2>Effects Demo</h2>

      <div>
        <label>Nombre:</label>
        <input [value]="nombre()" (input)="nombre.set($any($event.target).value)" />
      </div>

      <div>
        <label>Edad:</label>
        <input type="number" [value]="edad()" (input)="edad.set(+$any($event.target).value)" />
      </div>

      <p>Revisa la consola para ver los logs</p>
    </div>
  `,
})
export class LoggerComponent {
  nombre = signal("");
  edad = signal(0);

  constructor() {
    // Effect: se ejecuta cuando nombre cambia
    effect(() => {
      console.log("Nombre cambió a:", this.nombre());
    });

    // Effect: se ejecuta cuando edad cambia
    effect(() => {
      console.log("Edad cambió a:", this.edad());

      if (this.edad() >= 18) {
        console.log("✅ Mayor de edad");
      } else {
        console.log("❌ Menor de edad");
      }
    });

    // Effect: reacciona a múltiples signals
    effect(() => {
      const nombre = this.nombre();
      const edad = this.edad();
      console.log(`Usuario actualizado: ${nombre}, ${edad} años`);
    });
  }
}
```

**Paso 4: Effects con localStorage**

```typescript
// configuracion.component.ts
import { Component, signal, effect } from "@angular/core";

interface Configuracion {
  tema: "claro" | "oscuro";
  idioma: string;
  notificaciones: boolean;
}

@Component({
  selector: "app-configuracion",
  standalone: true,
  template: `
    <div class="configuracion">
      <h2>Configuración</h2>

      <div>
        <label>Tema:</label>
        <select [value]="config().tema" (change)="actualizarTema($any($event.target).value)">
          <option value="claro">Claro</option>
          <option value="oscuro">Oscuro</option>
        </select>
      </div>

      <div>
        <label>Idioma:</label>
        <select [value]="config().idioma" (change)="actualizarIdioma($any($event.target).value)">
          <option value="es">Español</option>
          <option value="en">English</option>
          <option value="fr">Français</option>
        </select>
      </div>

      <div>
        <label>
          <input type="checkbox" [checked]="config().notificaciones" (change)="toggleNotificaciones()" />
          Notificaciones
        </label>
      </div>

      <button (click)="resetear()">Resetear a valores por defecto</button>

      <p><small>La configuración se guarda automáticamente</small></p>
    </div>
  `,
})
export class ConfiguracionComponent {
  // Cargar configuración desde localStorage
  private cargarConfig(): Configuracion {
    const guardada = localStorage.getItem("configuracion");
    return guardada
      ? JSON.parse(guardada)
      : {
          tema: "claro",
          idioma: "es",
          notificaciones: true,
        };
  }

  config = signal<Configuracion>(this.cargarConfig());

  constructor() {
    // Effect: guardar en localStorage cuando cambie
    effect(() => {
      const configuracion = this.config();
      localStorage.setItem("configuracion", JSON.stringify(configuracion));
      console.log("Configuración guardada:", configuracion);
    });

    // Effect: aplicar tema al documento
    effect(() => {
      document.body.setAttribute("data-theme", this.config().tema);
    });
  }

  actualizarTema(tema: "claro" | "oscuro") {
    this.config.update((c) => ({ ...c, tema }));
  }

  actualizarIdioma(idioma: string) {
    this.config.update((c) => ({ ...c, idioma }));
  }

  toggleNotificaciones() {
    this.config.update((c) => ({
      ...c,
      notificaciones: !c.notificaciones,
    }));
  }

  resetear() {
    this.config.set({
      tema: "claro",
      idioma: "es",
      notificaciones: true,
    });
  }
}
```

**Paso 5: Cleanup en Effects**

```typescript
// temporizador-effect.component.ts
import { Component, signal, effect } from "@angular/core";

@Component({
  selector: "app-temporizador-effect",
  standalone: true,
  template: `
    <div class="temporizador">
      <h2>Temporizador: {{ segundos() }}</h2>

      <button (click)="iniciar()" [disabled]="activo()">Iniciar</button>
      <button (click)="pausar()" [disabled]="!activo()">Pausar</button>
      <button (click)="resetear()">Resetear</button>

      @if (segundos() >= 10) {
      <p class="alerta">⏰ Han pasado 10 segundos!</p>
      }
    </div>
  `,
})
export class TemporizadorEffectComponent {
  segundos = signal(0);
  activo = signal(false);

  constructor() {
    // Effect con cleanup
    effect((onCleanup) => {
      if (this.activo()) {
        console.log("Iniciando temporizador");

        const intervalo = setInterval(() => {
          this.segundos.update((s) => s + 1);
        }, 1000);

        // Cleanup: limpiar el intervalo cuando el effect se destruya
        onCleanup(() => {
          console.log("Limpiando temporizador");
          clearInterval(intervalo);
        });
      }
    });

    // Effect: notificar cada 5 segundos
    effect(() => {
      const segs = this.segundos();
      if (segs > 0 && segs % 5 === 0) {
        console.log(`Han pasado ${segs} segundos`);
      }
    });
  }

  iniciar() {
    this.activo.set(true);
  }

  pausar() {
    this.activo.set(false);
  }

  resetear() {
    this.activo.set(false);
    this.segundos.set(0);
  }
}
```

**Paso 6: Computed vs Métodos - Comparación**

```typescript
// comparacion-computed.component.ts
import { Component, signal, computed } from "@angular/core";

@Component({
  selector: "app-comparacion-computed",
  standalone: true,
  template: `
    <div class="comparacion">
      <h2>Computed vs Métodos</h2>

      <input type="number" [value]="numero()" (input)="numero.set(+$any($event.target).value)" />

      <div>
        <h3>Usando Computed (Cachea resultado)</h3>
        <p>Factorial: {{ factorialComputed() }}</p>
        <p>Cuadrado: {{ cuadradoComputed() }}</p>
      </div>

      <div>
        <h3>Usando Métodos (Recalcula siempre)</h3>
        <p>Factorial: {{ factorialMetodo() }}</p>
        <p>Cuadrado: {{ cuadradoMetodo() }}</p>
      </div>

      <p><small>Abre la consola: computed calcula una vez, método calcula múltiples veces</small></p>
    </div>
  `,
})
export class ComparacionComputedComponent {
  numero = signal(5);

  // Computed: calcula una vez y cachea
  factorialComputed = computed(() => {
    console.log("💚 Computed factorial ejecutado");
    return this.calcularFactorial(this.numero());
  });

  cuadradoComputed = computed(() => {
    console.log("💚 Computed cuadrado ejecutado");
    return this.numero() ** 2;
  });

  // Métodos: se ejecutan cada vez que se llaman
  factorialMetodo(): number {
    console.log("🔴 Método factorial ejecutado");
    return this.calcularFactorial(this.numero());
  }

  cuadradoMetodo(): number {
    console.log("🔴 Método cuadrado ejecutado");
    return this.numero() ** 2;
  }

  private calcularFactorial(n: number): number {
    if (n <= 1) return 1;
    return n * this.calcularFactorial(n - 1);
  }
}
```

**Paso 7: Computed encadenados**

```typescript
// analisis-datos.component.ts
import { Component, signal, computed } from "@angular/core";

interface Venta {
  id: number;
  producto: string;
  cantidad: number;
  precio: number;
  fecha: Date;
}

@Component({
  selector: "app-analisis-datos",
  standalone: true,
  template: `
    <div class="analisis">
      <h2>Análisis de Ventas</h2>

      <div class="estadisticas">
        <div class="stat">
          <h4>Total Ventas</h4>
          <p>{{ totalVentas() }}</p>
        </div>

        <div class="stat">
          <h4>Ingresos Totales</h4>
          <p>\${{ ingresosTotales() }}</p>
        </div>

        <div class="stat">
          <h4>Ticket Promedio</h4>
          <p>\${{ ticketPromedio().toFixed(2) }}</p>
        </div>

        <div class="stat">
          <h4>Producto Más Vendido</h4>
          <p>{{ productoMasVendido() }}</p>
        </div>
      </div>

      <button (click)="agregarVentaAleatoria()">Agregar venta aleatoria</button>
    </div>
  `,
})
export class AnalisisDatosComponent {
  ventas = signal<Venta[]>([
    { id: 1, producto: "Laptop", cantidad: 2, precio: 1000, fecha: new Date() },
    { id: 2, producto: "Mouse", cantidad: 5, precio: 25, fecha: new Date() },
    { id: 3, producto: "Teclado", cantidad: 3, precio: 75, fecha: new Date() },
  ]);

  // Computed básicos: total de ventas
  totalVentas = computed(() => this.ventas().length);

  ingresosTotales = computed(() => this.ventas().reduce((sum, v) => sum + v.cantidad * v.precio, 0)); // Ingresos totales

  // Computed que depende de otros computed para calcular el ticket promedio
  ticketPromedio = computed(() => {
    const total = this.totalVentas();
    return total > 0 ? this.ingresosTotales() / total : 0;
  }); // Ticket promedio

  // Computed con lógica compleja
  productoMasVendido = computed(() => {
    const ventas = this.ventas();
    if (ventas.length === 0) return "N/A";

    const ventasPorProducto = ventas.reduce((acc, v) => {
      acc[v.producto] = (acc[v.producto] || 0) + v.cantidad;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(ventasPorProducto).sort(([, a], [, b]) => b - a)[0][0]; // Producto más vendido
  });

  agregarVentaAleatoria() {
    const productos = ["Laptop", "Mouse", "Teclado", "Monitor", "Webcam"];
    const producto = productos[Math.floor(Math.random() * productos.length)];

    this.ventas.update((ventas) => [
      ...ventas,
      {
        id: ventas.length + 1,
        producto,
        cantidad: Math.floor(Math.random() * 5) + 1,
        precio: Math.floor(Math.random() * 500) + 50,
        fecha: new Date(), // Fecha actual
      },
    ]);
  }
}
```

### 🧪 Ejercicios

1. **Conversor de monedas**: Crea un componente con:

   - Signals para cantidad en USD
   - Computed para conversión a EUR, GBP, JPY
   - Effect que loguee cada conversión
   - Muestra todas las conversiones en tiempo real

2. **Dashboard de métricas**: Crea un componente con:

   - Signal con array de ventas mensuales
   - Computed para: total, promedio, máximo, mínimo (de ventas)
   - Computed para crecimiento porcentual mes a mes
   - Effect que guarde las métricas en localStorage

3. **Filtro de productos**: Crea un componente con:

   - Signal con array de productos (nombre, precio, categoría, stock)
   - Signals para filtros: categoría, precio mínimo, precio máximo
   - Computed para productos filtrados
   - Computed para estadísticas de productos filtrados (ej. precio promedio, total en stock)
   - Effect que loguee cuántos productos se muestran

4. **Temporizador Pomodoro**: Crea un temporizador que:
   - Use signals para minutos y segundos
   - Computed para tiempo formateado (MM:SS)
   - Effect con cleanup para el intervalo
   - Effect que notifique cuando se complete un pomodoro (25 min)
   - Guarde sesiones completadas en localStorage

**Buenas prácticas de esta clase:**

- Usa computed para valores derivados (mejor que métodos en templates)
- Effects son para side effects (DOM, APIs, localStorage)
- Evita mutaciones en computed (solo lectura)
- Usa cleanup en effects con timers o suscripciones
- Computed cachea resultados = mejor performance

---

## Clase 8: Input Signals y Comunicación entre Componentes

### ✅ Temario

- Input signals con input()
- Input requeridos vs opcionales

### 📚 Teoría

**Input Signals:**
Angular 18 introduce `input()` para reemplazar `@Input()`. Los input signals son reactivos y más fáciles de usar con computed y effects.

**Sintaxis:**

```typescript
// Antiguo
@Input() nombre: string = '';

// Moderno (Angular 18)
nombre = input<string>(''); // Opcional con valor por defecto
nombre = input.required<string>(); // Requerido
```

**Ventajas:**

- ✅ Totalmente reactivo
- ✅ Funciona con computed y effects
- ✅ Type-safe
- ✅ Menos boilerplate

### 🛠️ Práctica Guiada

**Paso 1: Input signals básicos**

```typescript
// Componente Hijo: tarjeta-producto.component.ts
import { Component, input, computed } from "@angular/core";

@Component({
  selector: "app-tarjeta-producto",
  standalone: true,
  template: `
    <div class="tarjeta">
      <img [src]="imagen()" [alt]="nombre()" />
      <h3>{{ nombre() }}</h3>
      <p class="precio">\${{ precio() }}</p>
      <p class="descuento">{{ textoDescuento() }}</p>

      @if (enStock()) {
      <span class="badge stock">✅ En Stock</span>
      } @else {
      <span class="badge sin-stock">❌ Agotado</span>
      }
    </div>
  `,
  styles: [
    `
      .tarjeta {
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 1rem;
        text-align: center;
      }
      img {
        width: 100%;
        max-width: 200px;
        height: auto;
      }
      .precio {
        font-size: 1.5rem;
        font-weight: bold;
        color: #2ecc71;
      }
      .descuento {
        color: #e74c3c;
        font-weight: bold;
      }
      .badge {
        display: inline-block;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.875rem;
      }
      .stock {
        background: #d4edda;
        color: #155724;
      }
      .sin-stock {
        background: #f8d7da;
        color: #721c24;
      }
    `,
  ],
})
export class TarjetaProductoComponent {
  // Input signals básicos
  nombre = input.required<string>(); // Requerido
  precio = input.required<number>();
  imagen = input<string>("https://via.placeholder.com/200"); // Opcional con default
  enStock = input<boolean>(true);
  descuento = input<number>(0);

  // Computed basado en inputs
  textoDescuento = computed(() => {
    // Muestra el texto de descuento
    const desc = this.descuento();
    return desc > 0 ? `${desc}% de descuento` : "";
  });
}
```

```typescript
// Componente Padre: catalogo.component.ts
import { Component, signal } from "@angular/core";
import { TarjetaProductoComponent } from "./tarjeta-producto.component";

@Component({
  selector: "app-catalogo",
  standalone: true,
  imports: [TarjetaProductoComponent],
  template: `
    <div class="catalogo">
      <h2>Catálogo de Productos</h2>

      <div class="grid">
        @for (producto of productos(); track producto.id) {
        <app-tarjeta-producto [nombre]="producto.nombre" [precio]="producto.precio" [imagen]="producto.imagen" [enStock]="producto.enStock" [descuento]="producto.descuento"> </app-tarjeta-producto>
        }
      </div>
    </div>
  `,
  styles: [
    `
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1rem;
      }
    `,
  ],
})
export class CatalogoComponent {
  productos = signal([
    {
      id: 1,
      nombre: "Laptop Pro",
      precio: 1299,
      imagen: "https://via.placeholder.com/200",
      enStock: true,
      descuento: 15,
    },
    {
      id: 2,
      nombre: "Mouse Gamer",
      precio: 79,
      imagen: "https://via.placeholder.com/200",
      enStock: true,
      descuento: 0,
    },
    {
      id: 3,
      nombre: "Teclado Mecánico",
      precio: 159,
      imagen: "https://via.placeholder.com/200",
      enStock: false,
      descuento: 20,
    },
  ]);
}
```

**Paso 2: Transform functions**

```typescript
// tarjeta-usuario.component.ts
import { Component, input, computed } from "@angular/core";

@Component({
  selector: "app-tarjeta-usuario",
  standalone: true,
  template: `
    <div class="tarjeta-usuario">
      <!-- Corregido: div para la tarjeta -->
      <h3>{{ nombreMayusculas() }}</h3>
      <p>Edad: {{ edad() }} años</p>
      <p>Activo: {{ activo() ? "Sí" : "No" }}</p>
      <p>Puntos: {{ puntos() }}</p>
    </div>
  `,
})
export class TarjetaUsuarioComponent {
  // Transform: convertir a mayúsculas
  nombre = input("", {
    // Input para el nombre
    transform: (value: string) => value.toUpperCase(),
  });

  // Computed adicional si necesitas más lógica
  nombreMayusculas = computed(() => this.nombre()); // Computed para el nombre en mayúsculas

  // Transform: asegurar número válido
  edad = input(0, {
    transform: (value: string | number) => {
      const num = typeof value === "string" ? parseInt(value) : value;
      return isNaN(num) ? 0 : num;
    },
  });

  // Transform: convertir string a boolean (útil para atributos HTML)
  activo = input(false, {
    transform: (value: boolean | string) => {
      if (typeof value === "string") {
        return value === "true" || value === "1";
      }
      return value;
    },
  });

  // Transform: redondear puntos
  puntos = input(0, {
    transform: (value: number) => Math.round(value),
  });
}
```

```typescript
// Uso del componente con transforms
@Component({
  selector: "app-usuarios",
  standalone: true,
  imports: [TarjetaUsuarioComponent],
  template: ` <app-tarjeta-usuario nombre="ana garcía" [edad]="25.7" activo="true" [puntos]="150.8"> </app-tarjeta-usuario> `,
})
export class UsuariosComponent {}
```

**Paso 3: Input signals con alias**

```typescript
// comentario.component.ts
import { Component, input, computed } from "@angular/core";

@Component({
  selector: "app-comentario",
  standalone: true,
  template: `
    <div class="comentario">
      <div class="autor">
        <strong>{{ nombreAutor() }}</strong>
        <span class="fecha">{{ fechaFormateada() }}</span>
      </div>
      <p>{{ textoComentario() }}</p>
      <div class="acciones">
        <span>👍 {{ meGusta() }}</span>
      </div>
    </div>
  `,
})
export class ComentarioComponent {
  // Usar alias para nombres diferentes en template vs propiedad
  nombreAutor = input.required<string>({ alias: "autor" }); // Alias 'autor'
  textoComentario = input.required<string>({ alias: "texto" }); // Alias 'texto'
  fechaComentario = input.required<Date>({ alias: "fecha" }); // Alias 'fecha'
  meGusta = input<number>(0, { alias: "likes" }); // Alias 'likes'

  fechaFormateada = computed(() => {
    // Computed para formatear la fecha
    const fecha = this.fechaComentario();
    return fecha.toLocaleDateString("es-ES");
  });
}
```

```typescript
// Uso con alias
@Component({
  selector: "app-comentarios",
  standalone: true,
  imports: [ComentarioComponent],
  template: ` <app-comentario autor="Ana García" texto="¡Excelente artículo!" [fecha]="new Date()" [likes]="15"> </app-comentario> `,
})
export class ComentariosComponent {}
```

**Paso 4: Input signals con effects**

```typescript
// notificacion.component.ts
import { Component, input, effect } from "@angular/core";

type TipoNotificacion = "info" | "success" | "warning" | "error";

@Component({
  selector: "app-notificacion",
  standalone: true,
  template: `
    <div [class]="'notificacion ' + tipo()">
      <span class="icono">{{ icono() }}</span>
      <span class="mensaje">{{ mensaje() }}</span>
    </div>
  `,
  styles: [
    `
      .notificacion {
        padding: 1rem;
        border-radius: 4px;
        margin: 0.5rem 0;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .info {
        background: #d1ecf1;
        color: #0c5460;
      }
      .success {
        background: #d4edda;
        color: #155724;
      }
      .warning {
        background: #fff3cd;
        color: #856404;
      }
      .error {
        background: #f8d7da;
        color: #721c24;
      }
    `,
  ],
})
export class NotificacionComponent {
  mensaje = input.required<string>();
  tipo = input<TipoNotificacion>("info");
  duracion = input<number>(0); // 0 = no se auto-cierra

  constructor() {
    // Effect: loguear cuando cambie el mensaje
    effect(() => {
      // Se ejecuta cada vez que 'mensaje()' o 'tipo()' cambian
      console.log(`Nueva notificación (${this.tipo()}):`, this.mensaje());
    });

    // Effect: auto-cerrar si tiene duración
    effect((onCleanup) => {
      // onCleanup para limpiar el temporizador
      const duracion = this.duracion();

      if (duracion > 0) {
        console.log(`Notificación se cerrará en ${duracion}ms`);

        const timeout = setTimeout(() => {
          console.log("Notificación cerrada automáticamente");
          // Aquí se podría emitir un evento de cierre (ver Clase 9: Output Signals)
        }, duracion);

        onCleanup(() => clearTimeout(timeout));
      }
    });
  }

  icono() {
    const iconos: Record<TipoNotificacion, string> = {
      // Mapeo de tipos a iconos
      info: "ℹ️",
      success: "✅",
      warning: "⚠️",
      error: "❌",
    };
    return iconos[this.tipo()];
  }
}
```

**Paso 5: Comunicación compleja padre-hijo**

```typescript
// filtro-productos.component.ts
import { Component, input, computed } from "@angular/core";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoría: string;
}

@Component({
  selector: "app-filtro-productos",
  standalone: true,
  template: `
    <div class="filtro-productos">
      <h3>Productos Filtrados</h3>

      <div class="estadisticas">
        <p>Total: {{ productosFiltrados().length }}</p>
        <p>Precio promedio: \${{ precioPromedio().toFixed(2) }}</p>
      </div>

      @for (producto of productosFiltrados(); track producto.id) {
      <div class="producto">
        <h4>{{ producto.nombre }}</h4>
        <p>Categoría: {{ producto.categoría }}</p>
        <p class="precio">\${{ producto.precio }}</p>
      </div>
      } @empty {
      <p class="vacio">No hay productos que coincidan con los filtros</p>
      }
    </div>
  `,
})
export class FiltroProductosComponent {
  // Inputs
  productos = input.required<Producto[]>();
  categoriaSeleccionada = input<string>("todas");
  precioMinimo = input<number>(0);
  precioMaximo = input<number>(Infinity);
  busqueda = input<string>("");

  // Computed: filtrar productos
  productosFiltrados = computed(() => {
    let filtrados = this.productos();

    // Filtro por categoría
    const categoria = this.categoriaSeleccionada(); // Obtiene la categoría seleccionada
    if (categoria !== "todas") {
      filtrados = filtrados.filter((p) => p.categoría === categoria);
    }

    // Filtro por precio
    const min = this.precioMinimo();
    const max = this.precioMaximo();
    filtrados = filtrados.filter((p) => p.precio >= min && p.precio <= max);

    // Filtro por búsqueda
    const busqueda = this.busqueda().toLowerCase(); // Convierte a minúsculas para búsqueda insensible a mayúsculas
    if (busqueda) {
      filtrados = filtrados.filter((p) => p.nombre.toLowerCase().includes(busqueda));
    }

    return filtrados;
  });

  // Computed: estadísticas
  precioPromedio = computed(() => {
    const productos = this.productosFiltrados();
    if (productos.length === 0) return 0;

    const total = productos.reduce((sum, p) => sum + p.precio, 0);
    return total / productos.length;
  });
}

// tienda.component.ts
import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FiltroProductosComponent } from "./filtro-productos.component";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoría: string;
}

@Component({
  selector: "app-tienda",
  standalone: true,
  imports: [FiltroProductosComponent, FormsModule],
  template: `
    <div class="tienda">
      <h2>Tienda Online</h2>

      <div class="controles">
        <select [(ngModel)]="categoriaActual" aria-label="Filtrar por categoría">
          <option value="todas">Todas las categorías</option>
          <option value="electrónica">Electrónica</option>
          <option value="ropa">Ropa</option>
          <option value="hogar">Hogar</option>
        </select>
        <input type="number" [(ngModel)]="precioMin" placeholder="Precio mínimo" min="0" />

        <input type="number" [(ngModel)]="precioMax" placeholder="Precio máximo" min="0" />

        <input type="text" [(ngModel)]="textoBusqueda" placeholder="Buscar por nombre" />
      </div>

      <app-filtro-productos [productos]="productos()" [categoriaSeleccionada]="categoriaActual" [precioMinimo]="precioMinNumber" [precioMaximo]="precioMaxNumber" [busqueda]="textoBusqueda"></app-filtro-productos>
    </div>
  `,
})
export class TiendaComponent {
  // Datos (señal) simulados
  productos = signal<Producto[]>([
    { id: 1, nombre: "Smartphone X", precio: 799, categoría: "electrónica" },
    { id: 2, nombre: "Camiseta Algodón", precio: 19.99, categoría: "ropa" },
    { id: 3, nombre: "Aspiradora 2 en 1", precio: 129, categoría: "hogar" },
    { id: 4, nombre: "Auriculares Pro", precio: 149, categoría: "electrónica" },
    { id: 5, nombre: "Pantalón Vaquero", precio: 39.9, categoría: "ropa" },
  ]);

  // Controles (propiedades comunes con ngModel)
  categoriaActual = "todas";
  precioMin = 0;
  precioMax: number | null = null; // null = sin tope
  textoBusqueda = ""; // Texto de búsqueda

  // Normaliza el tope máximo (evita pasar null al hijo)
  get precioMaxNumber(): number {
    return typeof this.precioMax === "number" ? this.precioMax : Number.POSITIVE_INFINITY;
  }

  // Asegura mínimo como número válido
  get precioMinNumber(): number {
    return typeof this.precioMin === "number" ? this.precioMin : 0;
  }
}
```

# MÓDULO 3: Routing y Navegación

Aprende a configurar rutas, parámetros, navegación y lazy loading en Angular 18.

### Teoría

- Angular 18 utiliza el sistema de rutas moderno con `provideRouter`, eliminando la necesidad de módulos.
- Permite navegación entre vistas, uso de parámetros, guards y carga perezosa (lazy loading).

### Práctica Guiada

- Configura rutas con `provideRouter` en `main.ts`.
- Crea componentes para Home, About y NotFound.
- Usa `routerLink` para navegación y `router-outlet` para renderizado.
- Agrega parámetros de ruta y query params.
- Implementa un guard simple y lazy loading de un módulo.

### Ejercicios

- Crea una app con rutas: /inicio, /productos, /contacto.
- Agrega navegación con enlaces activos.
- Implementa una ruta con parámetro: /producto/:id.
- Agrega un guard que bloquee /admin si no hay login.

---

# MÓDULO 4: Formularios

Domina los formularios en Angular: template-driven y reactive forms.

### Teoría

- Angular ofrece dos enfoques: Template-driven (más simple) y Reactive Forms (más controlado).
- Reactive Forms permite validaciones, grupos anidados y control total del estado del formulario.

### Práctica Guiada

- Crea un formulario de contacto con [(ngModel)].
- Crea un formulario reactivo con `FormBuilder` y validaciones.
- Muestra errores de validación en tiempo real.
- Agrupa campos en `FormGroup` y usa `FormArray` para listas dinámicas.

### Ejercicios

- Formulario de registro con validaciones (email, password, confirmación).
- Formulario de encuesta con preguntas dinámicas.
- Formulario de login reactivo con feedback visual.

---

# MÓDULO 5: Servicios y HTTP

Aprende a crear servicios, consumir APIs y manejar errores.

### Teoría

- Los servicios permiten compartir lógica y datos entre componentes.
- `HttpClient` permite consumir APIs REST de forma reactiva.
- Los interceptors permiten modificar peticiones/respuestas globalmente.

### Práctica Guiada

- Crea un servicio de productos con `inject()`.
- Usa `HttpClient` para obtener datos de una API.
- Muestra los datos en un componente con `async pipe`.
- Agrega un interceptor para mostrar un loader o manejar errores.

### Ejercicios

- Crea un servicio de usuarios que obtenga datos de una API.
- Agrega manejo de errores con mensajes amigables.
- Implementa un interceptor que agregue un token a cada petición.

---

# MÓDULO 6: Estado y Arquitectura

Gestiona el estado de tu app con Signals y aplica buenas prácticas de arquitectura.

### Teoría

- Signals permite manejar estado reactivo sin necesidad de librerías externas.
- Se recomienda separar componentes en smart (contenedores) y dumb (presentacionales).
- Los servicios compartidos permiten centralizar el estado.

### Práctica Guiada

- Crea un store de carrito de compras con Signals.
- Usa `computed` para calcular totales.
- Crea componentes que consuman el estado sin necesidad de `@Input()`.
- Organiza tu app en carpetas: components, services, models, pages.

### Ejercicios

- Implementa una lista de favoritos con Signals.
- Crea un contador global accesible desde cualquier componente.
- Refactoriza una app para separar lógica y presentación.

---

# MÓDULO 7: Testing y Calidad

Aprende a testear componentes, servicios y formularios.

### Teoría

- Angular usa Jasmine y Karma para testing unitario.
- Puedes testear componentes, servicios, pipes y formularios.
- El testing mejora la calidad y evita regresiones.

### Práctica Guiada

- Crea un test para un componente simple con `TestBed`.
- Mockea un servicio con `spyOn`.
- Testea un formulario reactivo con validaciones.
- Ejecuta los tests con `ng test` y analiza la cobertura.

### Ejercicios

- Testea un pipe personalizado.
- Testea un servicio que consume una API.
- Agrega tests a un formulario de login.

---

# MÓDULO 8: Performance y Accesibilidad

Optimiza tu app para que sea rápida y accesible.

### Teoría

- Lazy loading, signals y standalone components mejoran el rendimiento.
- Evita operaciones costosas en el template.
- Accesibilidad (a11y) permite que tu app sea usable por todos.
- Usa roles, etiquetas ARIA y navegación con teclado.

### Práctica Guiada

- Divide tu app en módulos lazy.
- Usa `track` en `@for` para mejorar el rendimiento.
- Agrega roles y etiquetas ARIA a tus componentes.
- Verifica accesibilidad con Lighthouse.

### Ejercicios

- Optimiza una lista grande con `track` y `@for`.
- Agrega navegación por teclado a un modal.
- Corrige errores de accesibilidad detectados por Lighthouse.

---

# MÓDULO 9: Proyecto Final Integrador

Construye una aplicación completa aplicando todo lo aprendido.

### Teoría

- El proyecto final consolida todos los conceptos: routing, servicios, formularios, estado, etc.
- Puedes elegir el dominio: e-commerce, gestor de tareas, blog, etc.

### Práctica Guiada

- Define la estructura del proyecto y crea los componentes principales.
- Implementa navegación, servicios, formularios y estado.
- Agrega validaciones, loading, errores y tests.
- Despliega la app en Firebase o Vercel.

### Ejercicios

- Crea un e-commerce con carrito, productos y checkout.
- Crea un gestor de tareas con login, CRUD y filtros.
- Crea un blog con posts, comentarios y autenticación.

---
