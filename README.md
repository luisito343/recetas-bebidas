# 🍹 Recetas de Bebidas

Aplicación web hecha con React para buscar recetas de bebidas usando la API de [TheCocktailDB](https://www.thecocktaildb.com/).

## ⚠️ Estado del proyecto

Este proyecto **aún no está terminado**. Actualmente se puede:

- Buscar bebidas por ingrediente y categoría.
- Ver resultados en tarjetas.
- Abrir un modal con detalles e instrucciones de cada bebida.

En progreso:

- Página de favoritos (`/favorites`) todavía en construcción.
- Botón de favoritos en el modal pendiente de implementación funcional.

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
- `/favorites` → vista de favoritos (pendiente).

## 🔌 API utilizada

Se consume TheCocktailDB:

- `GET /list.php?c=list` → categorías
- `GET /filter.php?i={ingredient}&c={category}` → búsqueda de bebidas
- `GET /lookup.php?i={id}` → detalle de receta

## 📁 Estructura principal

```txt
src/
  components/   # UI reutilizable (Header, Form, Modal, Card...)
  pages/        # Vistas por ruta
  services/     # Llamadas HTTP a la API
  stores/       # Estado global con Zustand
  utils/        # Schemas de validación
  types/        # Tipos TypeScript
```

## 🛠️ Próximos pasos sugeridos

- Completar gestión de favoritos (agregar, quitar, persistir).
- Mejorar validaciones y manejo de errores en UI.
- Agregar tests de componentes y store.
- Pulir textos/estilos y limpiar logs de consola para producción.

## 👨‍💻 Autor

Proyecto de práctica en desarrollo.
