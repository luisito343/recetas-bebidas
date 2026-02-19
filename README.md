# 🍹 Recetas de Bebidas

Aplicación web hecha con React para buscar recetas de bebidas con [TheCocktailDB](https://www.thecocktaildb.com/) y generar recetas con IA usando OpenRouter.

## ✅ Funcionalidades actuales

- Buscar bebidas por ingrediente y categoría.
- Ver resultados en tarjetas.
- Abrir modal con detalles e instrucciones.
- Guardar y quitar favoritos.
- Persistir favoritos en `localStorage`.
- Mostrar notificaciones globales.
- Generar recetas de bebidas con IA en tiempo real (streaming).
- Copiar la receta generada al portapapeles.

## 🚀 Tecnologías

- React 19 + TypeScript
- Vite
- Tailwind CSS
- Zustand
- React Router
- Axios
- Zod
- Headless UI
- AI SDK (`ai`) + OpenRouter (`@openrouter/ai-sdk-provider`)

## 📦 Instalación

1. Clona el repositorio.
2. Instala dependencias:

```bash
pnpm install
```

3. Crea un archivo `.env` en la raíz del proyecto con tu API key:

```bash
VITE_OPEN_ROUTER_API_KEY=tu_api_key_aqui
```

## ▶️ Scripts disponibles

```bash
pnpm dev      # Levanta servidor de desarrollo
pnpm build    # Compila TypeScript y genera build
pnpm preview  # Previsualiza la build
pnpm lint     # Ejecuta ESLint
```

## 🧭 Rutas

- `/` → buscador de bebidas.
- `/favorites` → bebidas favoritas guardadas.
- `/generate-ai` → generador de recetas con IA.

## 🔌 APIs / servicios

### TheCocktailDB

- `GET /list.php?c=list` → categorías
- `GET /filter.php?i={ingredient}&c={category}` → búsqueda
- `GET /lookup.php?i={id}` → detalle

### OpenRouter

- Se usa para generar recetas desde prompts del usuario.
- Configuración en `src/lib/ai.ts` mediante `VITE_OPEN_ROUTER_API_KEY`.


## 👨‍💻 Autor

- Luis Nava
