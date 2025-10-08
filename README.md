# Pokédex React (Hackaton project)

Esta es mi Pokédex, hecha con React, TypeScript y Vite. Se puede navegar por los 50 primeros Pokémon, ver detalles, filtar por tipo, buscar por nombre y guardar como favoritos (con persistencia en localStorage). Los datos vienen de la [PokéAPI](https://pokeapi.co/). ¡Que la disfrutes!

## 💡 Funcionalidades

- **Explorar Pokémon**: Una lista completa de Pokémon con sus imágenes e información básica
- **Buscar y Filtrar**: Busca por nombre y filtra por tipo para encontrar Pokémon específicos
- **Marcar como favorito**: Marca Pokémon como favoritos y filtra para ver solo los favoritos
- **Detalles**: Hacer clic en cualquier Pokémon para ver información detallada incluyendo estadísticas, peso y altura

## 📋 Prerequisitos

Antes de ejecutar la Pokédex, necesitas esto en tu sistema:

- **Node.js** (versión 18.0 o superior)
- **npm** (generalmente viene con Node.js)
- **Git** (para clonar el repositorio)

## 🚀 Instalación

### 1. Clona el Repositorio
```bash
git clone https://github.com/LaraBerenguer/pokedex.git
cd pokedex
```

### 2. Instala Dependencias
```bash
npm install
```

### 3. Ejecuta la app en local
```bash
npm run dev
# La aplicación estará disponible en http://localhost:5173
```

## 🧪 Testing
La Pokéapi contiene tests de integración y unitarios.

### Ejecutar todos los test:
```bash
npm test
```
### Ejecutar test de integración:
```bash
npm run test src/__tests__
```
### Ejecutar test unitarios:
```bash
npm run test src/components/__tests__
```

## 🌳 Estructura del Proyecto

```
pokedex/
├── public/                     # Recursos estáticos
│   ├── background.png         
│   └── favicon.ico           
├── src/
│   ├── __tests__/            # Pruebas de integración a nivel de página
│   │   ├── DetailsPage.test.tsx
│   │   └── HomePage.test.tsx
│   ├── components/           # Componentes
│   │   ├── __tests__/        # Pruebas unitarias de componentes
│   │   ├── ui/              # Componentes UI reutilizables
│   │   │   ├── Badge.tsx    # Insignias de tipo
│   │   │   ├── FavIcon.tsx  # Componente de icono favorito
│   │   │   ├── Filter.tsx   # Componente de filtro de tipo
│   │   │   ├── GoBackButton.tsx   # Componente de botón de volver
│   │   │   └── Spinner.tsx  # Spinner de carga
│   │   ├── DetailsCard.tsx  # Visualización de detalles de Pokémon
│   │   ├── FavoriteFilter.tsx # Filtro de favoritos
│   │   ├── PokemonCard.tsx  # Componente de tarjeta Pokémon
│   │   ├── Search.tsx       # Barra de búsqueda
│   │   └── Stats.tsx        # Visualización de estadísticas pokemon
│   ├── context/             # React Context
│   │   └── PokemonContext.tsx # Gestión de estado global
│   ├── hooks/               # Custom React hooks
│   │   ├── useFavorite.ts   # Gestión de favoritos
│   │   ├── usePokemon.ts    # Obtención de datos de Pokémon
│   │   └── useType.ts       # Obtención de datos de tipo
│   ├── layout/              # Componentes de layout
│   │   ├── Layout.tsx       # Wrapper de layout principal
│   │   └── layout.css       # Estilos de layout
│   ├── pages/               # Páginas de la aplicación
│   │   ├── Details.tsx      # Página de detalles de Pokémon
│   │   ├── Error500.tsx     # Página de error
│   │   ├── Home.tsx         # Página de inicio con lista de Pokémon
│   │   └── NotFound.tsx     # Página 404
│   ├── routes/              # Configuración de rutas
│   │   └── AppRoutes.tsx    # Definiciones de rutas
│   ├── types/               # Definiciones de tipos TypeScript
│   │   └── types.ts         # Tipos de datos de Pokémon
│   ├── utils/               # Funciones de utilidad
│   │   ├── capitalize.ts    # Capitalización de strings
│   │   ├── getUrlId.ts      # Extracción de ID de URL
│   │   └── typeColors.ts    # Mapeo de colores por tipo
│   ├── index.css            # Estilos globales
│   └── main.tsx            # Punto de entrada de la aplicación
├── index.html               # Plantilla HTML
├── jest.config.js          # Configuración de Jest
├── package.json            # Dependencias y scripts
├── tsconfig.json           # Configuración de TypeScript
├── tsconfig.app.json       # Config TS específica de la app
├── tsconfig.node.json      # Config TS específica de Node
└── vite.config.ts          # Configuración de Vite
```

## 🔎 Pruebas recomendadas

### Pruebas de Navegación
1. **✔️ Carga de Página de Inicio**
   - Navegar a la aplicación
   - Verificar que todas las tarjetas de Pokémon se cargan correctamente
   - Verificar que las imágenes se muestran correctamente

2. **✔️ Funcionalidad de Búsqueda**
   - Usar la barra de búsqueda para encontrar Pokémon específicos (ej: "Pikachu")
   - Verificar que los resultados de búsqueda se actualicen en tiempo real
   - Probar búsqueda case sensitive

3. **✔️ Filtrado por Tipo**
   - Seleccionar diferentes filtros de tipos
   - Verificar que solo aparezcan Pokémon del tipo seleccionado
   - Probar combinación de búsqueda + filtro de tipo

4. **✔️ Sistema de Favoritos**
   - Hacer clic en el icono de estrella en varios Pokémon para agregar/quitar favoritos
   - Usar el filtro "Favoritos"
   - Verificar que los favoritos persisten después de refrescar la página (localStorage)

5. **✔️ Navegación de Página de Detalles**
   - Hacer clic en cualquier tarjeta de Pokémon
   - Verificar que la página de detalles se carga con información correcta
   - Verificar visualización de estadísticas, peso, altura y tipos
   - Usar el botón "Volver" para regresar al inicio

7. **✔️ Manejo de Errores**
   - Probar con conexiones de red lentas o fallidas
   - Navegar a URLs inválidas (ej: `/ruta-invalida`)
   - Verificar que se muestren mensajes de error apropiados

## 💻 Stack Tecnológico

- **Frontend**: React 19, TypeScript
- **Herramienta de Build**: Vite
- **Estilos**: Tailwind CSS
- **Enrutamiento**: React Router v7
- **Testing**: Jest, React Testing Library
- **Gestión de Estado**: React Context API

## 🌐 Pokéapi

Esta aplicación utiliza la [PokéAPI](https://pokeapi.co/) para datos de Pokémon:
- **URL Base**: `https://pokeapi.co/api/v2/`
- **Lista de Pokémon**: `/pokemon?limit=50`
- **Tipos**: `/type`

## 🤝 Contribuciones
Eres libre de participar en este proyecto. Escríbeme o haz una PR!