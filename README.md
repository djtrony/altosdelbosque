# 🌲 Altos del Bosque — Portal de Comunicaciones

Portal web de comunicaciones para el **Conjunto Residencial Altos del Bosque**. Centraliza en un solo lugar los avisos, circulares y novedades de la administración, para que los copropietarios y residentes estén informados al instante desde cualquier dispositivo.

Proyecto académico del módulo **Desarrollo de Front-end**.

---

## 📌 Problema que resuelve

En muchos conjuntos residenciales la información importante (cortes de agua, mantenimientos, asambleas, normas de convivencia) se comunica por carteleras físicas o grupos de WhatsApp, donde se pierde fácilmente. Este portal ofrece una **cartelera digital organizada**, con búsqueda por categorías, avisos guardados y un canal directo con la administración.

## ✨ Funcionalidades

| Módulo | Ruta | Descripción |
|---|---|---|
| **Inicio** | `/home` | Página principal con hero, datos rápidos del conjunto, avisos destacados, guía de uso, testimonios y llamado a la acción. |
| **Avisos** | `/catg-news` | Cartelera de avisos con buscador por texto y filtro por categoría (Mantenimiento, Administración, Convivencia, Seguridad). Permite guardar/quitar avisos de favoritos. |
| **Detalle del aviso** | `/detail-news` | Vista completa de un comunicado: contenido, autor, fecha, prioridad y archivos adjuntos. |
| **Publicar** | `/add-news` | Formulario para que la administración publique un nuevo aviso (título, categoría, prioridad, resumen, contenido e imagen). Al publicar redirige a la cartelera. |
| **Contacto / PQRS** | `/contacto` | Canales de atención (dirección, teléfono, correo, horarios) y formulario para radicar peticiones, quejas, reclamos o sugerencias. |
| **Login** | `/login` | Pantalla de inicio de sesión *(en construcción)*. |

### Persistencia de datos

Los avisos se guardan en el navegador con **`localStorage`** a través del servicio `NewsService` (`src/app/services/news.ts`). La primera vez que se abre la app se cargan unos avisos de ejemplo; los avisos nuevos y el estado de "guardado" se conservan entre recargas.

Cada aviso sigue esta estructura:

```ts
interface Aviso {
  id: number;
  titulo: string;
  resumen: string;
  contenidoHtml?: string;
  categoria: 'Mantenimiento' | 'Administración' | 'Convivencia' | 'Seguridad';
  fecha: string;
  imagen: string;
  guardado: boolean;
  prioridad: 'Alta' | 'Normal';
  autor?: string;
}
```

## 🛠️ Tecnologías

- [Ionic Framework 9](https://ionicframework.com/) — componentes de UI y diseño responsive
- [Angular 22](https://angular.dev/) — componentes *standalone*, rutas con carga diferida (`loadComponent`)
- [TypeScript 6](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/) — estilos por página y variables de tema
- [Ionicons 8](https://ionic.io/ionicons) — iconografía
- [Capacitor 8](https://capacitorjs.com/) — base para empaquetar como app móvil
- [Vitest](https://vitest.dev/) + jsdom — pruebas unitarias
- [ESLint](https://eslint.org/) con `angular-eslint` — calidad de código

## 📂 Estructura del proyecto

```
src/
├── app/
│   ├── home/                 # Página de inicio
│   ├── pages/
│   │   ├── add-news/         # Publicar aviso
│   │   ├── catg-news/        # Cartelera con filtros y búsqueda
│   │   ├── contacto/         # Canales de atención y PQRS
│   │   ├── detail-news/      # Detalle de un aviso
│   │   └── login/            # Inicio de sesión
│   ├── services/
│   │   └── news.ts           # Servicio de avisos (localStorage)
│   ├── app.component.*       # Componente raíz
│   └── app.routes.ts         # Definición de rutas
├── assets/                   # Imágenes e íconos
├── theme/variables.scss      # Variables de color de Ionic
└── global.scss               # Estilos globales
```

## 🚀 Instalación y ejecución

### Requisitos previos

- [Node.js](https://nodejs.org/) (versión LTS reciente) y npm
- (Opcional) Ionic CLI: `npm install -g @ionic/cli`

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/djtrony/altosdelbosque.git
cd altosdelbosque

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm start
# o, con Ionic CLI:
ionic serve
```

La aplicación queda disponible en `http://localhost:4200` (o `http://localhost:8100` si usas `ionic serve`).

### Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm start` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Compila la versión de producción en la carpeta `www/` |
| `npm run watch` | Compila en modo desarrollo y observa cambios |
| `npm test` | Ejecuta las pruebas unitarias |
| `npm run lint` | Revisa el código con ESLint |

## 🌐 Despliegue

La versión de producción se genera con `npm run build` y queda en `www/`, lista para publicarse en un hosting estático (Netlify, Vercel, GitHub Pages, Firebase Hosting, etc.).

**Demo en línea:** _pendiente — agregar enlace cuando esté desplegado._

## 🗺️ Estado y próximos pasos

- [x] Maquetación de Inicio, Avisos, Detalle, Publicar y Contacto
- [x] Servicio de avisos con persistencia en `localStorage`
- [x] Búsqueda y filtro por categoría en la cartelera
- [ ] Conectar el detalle del aviso con el servicio (ruta `/detail-news/:id`)
- [ ] Página de **Guardados** (el enlace ya existe en el menú)
- [ ] Pantalla de **Login** funcional
- [ ] Mostrar en Inicio los avisos reales del servicio
- [ ] Despliegue público

