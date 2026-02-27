# MERN Lab 01 Express

## ¿Qué hace el lab?

MERN Lab 01 Express es un laboratorio educativo que enseña desarrollo full-stack con JavaScript. Implementa una aplicación completa con:

- **Backend**: API REST construida con Express.js
- **Frontend**: Interfaz de usuario con React
- **API Explorer**: Herramienta interactiva para probar endpoints en tiempo real

## Cómo Correrlo

### Requisitos

- Node.js ≥18
- npm

### Instalación

**Backend:**

```bash
cd server
npm install
```

**Frontend:**

```bash
cd client
npm install
```

### Ejecutar en desarrollo

**Terminal 1 - Backend:**

```bash
cd server
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

**Terminal 2 - Frontend:**

```bash
cd client
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

Abre `http://localhost:5173` en tu navegador y accede al **API Explorer** para probar los endpoints.

## Endpoints

La API exposición tres endpoints principales:

| Método | Ruta         | Descripción                     |
| ------ | ------------ | ------------------------------- |
| GET    | `/`          | Retorna estado del servidor     |
| GET    | `/api/about` | Información acerca de la API    |
| GET    | `/api/hello` | Retorna un saludo con timestamp |

Todos los endpoints retornan status 200. Úsalos desde el API Explorer en `http://localhost:5173`.

## Tecnologías Usadas

| Tecnología       | Versión | Justificación                                                                |
| ---------------- | ------- | ---------------------------------------------------------------------------- |
| **Express**      | 5.2.1   | Framework web minimalista y flexible para construir APIs REST                |
| **React**        | 19.2.0  | Biblioteca moderna para crear interfaces reactivas en el navegador           |
| **Vite**         | 7.3.1   | Build tool con reemplazo de módulos en caliente (HMR) para desarrollo rápido |
| **Tailwind CSS** | 4.2.0   | Framework CSS utility-first para estilizar rápidamente sin CSS personalizado |
| **shadcn/ui**    | Latest  | Componentes React sin estilo de alta calidad para construir UIs consistentes |
| **TypeScript**   | -       | Lenguaje tipado que mejora la seguridad y mantenibilidad del código          |
| **Helmet**       | 8.1.0   | Middleware que asegura headers HTTP contra vulnerabilidades comunes          |
| **Morgan**       | 1.10.1  | Logger de peticiones HTTP para debugging y monitoreo                         |
| **CORS**         | 2.8.6   | Middleware para permitir comunicación cross-origin entre frontend y backend  |
| **dotenv**       | 17.3.1  | Carga variables de entorno desde archivo `.env`                              |

## Estructura de Carpetas

```
mern-lab-01-express/
├── client/                    # Aplicación React
│   ├── src/
│   │   ├── components/       # Componentes React reutilizables
│   │   │   ├── Header.tsx    # Encabezado con navegación
│   │   │   ├── Footer.tsx    # Pie de página
│   │   │   ├── mode-toggle.tsx
│   │   │   ├── theme-provider.tsx
│   │   │   └── explorer/     # Componentes para API Explorer
│   │   │       ├── endpoint-card.tsx
│   │   │       └── response-viewer.tsx
│   │   ├── pages/            # Páginas de la aplicación
│   │   │   ├── APIExplorer.tsx
│   │   │   └── Home.tsx
│   │   ├── lib/
│   │   │   └── api.js        # Funciones de cliente para llamadas API
│   │   ├── App.tsx           # Componente raíz
│   │   └── main.tsx          # Punto de entrada
│   ├── package.json
│   └── vite.config.ts
├── server/                    # Aplicación Express
│   ├── src/
│   │   └── index.js          # Servidor Express y rutas
│   ├── .env                  # Variables de entorno (PORT=3000)
│   └── package.json
├── docs/
│   └── SHADCN_BEST_PRACTICES.md
├── README.md                  # Este archivo
└── CHANGELOG.md               # Historial de versiones
```
