# 🍹 Recetas de Bebidas

Aplicación web hecha con React para buscar recetas de bebidas usando la API de [TheCocktailDB](https://www.thecocktaildb.com/).

## ⚠️ Estado del proyecto

Este proyecto está en desarrollo activo. Actualmente permite:

- Buscar bebidas por ingrediente y categoría.
- Ver resultados en tarjetas.
- Abrir un modal con detalles e instrucciones de cada bebida.
- Agregar y quitar bebidas de favoritos.
- Ver la página de favoritos con las bebidas guardadas.
- Persistir favoritos en `localStorage`.
- Mostrar notificaciones globales de éxito/error.

Pendiente:

- Mejoras visuales y nuevos flujos de UX.

## 🚀 Tecnologías

- React 19 + TypeScript
- Vite
- Tailwind CSS
- Zustand (estado global)
- React Router
- Axios
- Zod (validación de respuestas)
- Headless UI (modal)

## 📦 Instalación

1. Clona el repositorio.
2. Instala dependencias:

```bash
pnpm install
```

> También puedes usar `npm install` o `yarn` si prefieres.

## ▶️ Scripts disponibles

```bash
pnpm dev      # Levanta servidor de desarrollo
pnpm build    # Compila TypeScript y genera build
pnpm preview  # Previsualiza la build
pnpm lint     # Ejecuta ESLint
```

## 🧭 Rutas actuales

- `/` → pantalla principal con formulario y resultados.
- `/favorites` → vista de bebidas favoritas guardadas.

## 🔌 API utilizada

Se consume TheCocktailDB:

- `GET /list.php?c=list` → categorías
- `GET /filter.php?i={ingredient}&c={category}` → búsqueda de bebidas
- `GET /lookup.php?i={id}` → detalle de receta

## 📁 Estructura principal

```txt
src/
  components/   # UI reutilizable (Header, Form, Modal, Card, Notification...)
  pages/        # Vistas por ruta
  services/     # Llamadas HTTP a la API
  stores/       # Estado global con Zustand (recetas, favoritos, notificaciones)
  utils/        # Schemas de validación
  types/        # Tipos TypeScript
```

## 🛠️ Próximos pasos

- Añadir mejoras adicionales de UX y nuevas funcionalidades con recomendaciondes por IA.

## 👨‍💻 Autor
- Luis Nava
Proyecto de práctica en desarrollo.
