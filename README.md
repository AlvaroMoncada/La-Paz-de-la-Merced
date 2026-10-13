# La Paz de la Merced - Residencia de Mayores

![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google_Gemini-API-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Express](https://img.shields.io/badge/Express-SSR-000000?style=for-the-badge&logo=express&logoColor=white)

> Centro residencial acreditado para personas mayores en el corazón de la ciudad. Dedicación médica 24/7, confort y cariño familiar.

Aplicación web moderna desarrollada con **Angular 21** y soporte para **Server-Side Rendering (SSR)**, orientada a ofrecer información completa, servicios y asistencia inteligente integrada con la **API de Google Gemini**.

---

## 🛠️ Tecnologías y Frameworks

- **Frontend:**
  - [Angular 21](https://angular.dev/) (Standalone Components, Signals, Router, Angular Material & CDK).
  - [TypeScript](https://www.typescriptlang.org/) para un tipado estático robusto.
  - [Tailwind CSS v4](https://tailwindcss.com/) para estilos utilitarios modernos y responsivos.
  - [Motion](https://motion.dev/) para microinteracciones y animaciones fluidas.
- **Backend / Renderizado:**
  - Angular SSR con [Express 5](https://expressjs.com/) para renderizado del lado del servidor y optimización SEO.
- **Inteligencia Artificial:**
  - [@google/genai](https://www.npmjs.com/package/@google/genai) para la integración segura de Gemini API en el servidor.
- **Calidad de Código y Testing:**
  - ESLint con integración para Angular.
  - Vitest para pruebas unitarias.

---

## 📋 Requisitos Previos

- [Node.js](https://nodejs.org/) (versión 20.x o superior recomendada).
- Gestor de paquetes `npm` (incluido con Node.js).
- Una clave de API de Google Gemini ([Google AI Studio](https://aistudio.google.com/)).

---

## 🚀 Instalación y Puesta en Marcha

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/la-paz-de-la-merced.git
cd la-paz-de-la-merced
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Crea o edita el archivo `.env.local` en la raíz del proyecto y añade tu clave de API de Gemini:
```env
GEMINI_API_KEY=tu_clave_de_gemini_aqui
```

### 4. Iniciar en entorno de desarrollo
```bash
npm run dev
```
La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

---

## 📦 Scripts Disponibles

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo en el puerto 3000 |
| `npm start` | Inicia el servidor de desarrollo por defecto de Angular |
| `npm run build` | Compila la aplicación tanto para cliente como para servidor (SSR) |
| `npm run serve:ssr:app` | Ejecuta el servidor Node.js con la compilación SSR de producción |
| `npm run lint` | Analiza el código en busca de problemas de estilo y sintaxis |
| `npm test` | Ejecuta la suite de pruebas unitarias con Vitest |

---

## 📂 Estructura Principal del Proyecto

```text
├── public/              # Recursos estáticos (imágenes, favicons, etc.)
├── src/
│   ├── app/             # Componentes, servicios, rutas y lógica de la aplicación
│   ├── main.server.ts   # Punto de entrada para Server-Side Rendering
│   ├── main.ts          # Punto de entrada para el cliente
│   └── styles.css       # Estilos globales y configuración Tailwind
├── .env.local           # Variables de entorno locales (no incluir en control de versiones)
└── package.json         # Dependencias y scripts del proyecto
```

---

## 📄 Licencia

Este proyecto es privado para la gestión y presentación del centro residencial **La Paz de la Merced**.
