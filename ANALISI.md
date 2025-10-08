# Análisis del proyecto Pokédex

## Arquitectura de Componentes y Servicios

### Visión General de la Arquitectura

He seguido una arquitectura modular basada en componentes que separa la funcionalidad y la responsabilidad. Es decir, he buscado el máximo de componentes reutilizables y he distribuid las funcionalidades entre ellos, con separación de responsabilidades.

Para los datos he utilizado un estado global que me ha sido útil para mantener una gestión centralizada de los datos.

Además del estado global y la separación de componentes y funcionalidades, he utilizado hooks personalizados para separar todavía más la lógica de negocio de los elementos UI.

Por últmo, el testing se encarga de que todos los flujos funcionen correctamente. Además, a nivel carga, he utilizado lazy loading para una experiencia más amigable en caso de carga lenta o mala conexión, así como useMemo para evitar gastar recursos en re-renderizados.

### Jerarquía de Componentes

La jerarquía de la app tiene esta estructura:

```
App (main.tsx)
├── PokemonProvider (Context)
├── BrowserRouter
└── Layout
    └── AppRoutes
        ├── Página de Inicio
        │   ├── Componente Search
        │   ├── Componente FavoriteFilter
        │   ├── Componente Filter (Filtros de tipo)
        │   └── Componentes PokemonCard
        └── Página de Detalles
            ├── Componente GoBackButton
            ├── Componente DetailsCard
            └── Componente Stats
```

## Decisiones Técnicas Tomadas

### Gestión de Datos

**Decisión: Endpoint para Pokémon y Endpoint para Types**

En el PDF se especifican los tres endpoint que hay que utilizar. Sin embargo, en mi proyecto he tomado una decisión que me hacía mucho más sencilla la recopilación de datos de los pokémon:

A partir de la llamada principal a GET /pokemon?limit=50, se extrae la lista de resultados y realizo una segunda llamada individual a la URL de detalle (pokemon.url) incluida en cada elemento de la respuesta. Esto me permite recoger la info necesaria de cada pokémon (imagen, tipos, peso, altura y estadísticas filtradas), evitando la necesidad de gestionar manualmente el endpoint /pokemon/{id} y simplificando la lógica de fetching.

Se sigue manteniendo la separación de responsabilidades gracias al servicio dedicado y obtengo control total sobre lo que recibo sin sobrecarga de datos.

### Gestión de Estado

**Decisión: React Context API sobre Redux**

El estado de la aplicación es simple, así que no quería introducir una herramienta como Redux que está pensada para estados más grandes y copmplejos. Además, evito una dependencia externa y me quedo en el ecosistema React.

He utilizado el Provider para que el uso del contexto fuera mucho más fácil.

### Enfoque de Estilos

**Decisión: Tailwind CSS**

Tailwind es la librería de estilos que más uso y con la que más cómoda me siento, de forma que he decidido utilizarla en vez de CSS. Las ventajas: más rápido, estilos consistentes y (aunque no era obligatorio) es fácil aplicar el responsive.

He utilizado CSS para la animación del spinner y para gestionar el background de la aplicación, ya que me es más familiar. Las animaciones con tailwind son complejas y requieren demasiado tiempo. También he usado CSS para aplicar estilos base en un mismo archivo (index.css).

### Testing

**Decisión: Jest + React Testing Library**

Jest + Testing Library es lo que más uso para testing, ya que es el estándar para React, de forma que ha sido mi primera opción. He creado test unitarios sencillos para componentes sueltos para comprobar que funcionen correctamente.

Para los test de integración de las funcionalidades principales he tenido que hacer uso de la IA para crear de forma correcta los mocks del contexto (el provider) y de las rutas, ya que me resultan complejos. En el test de Home.tsx he decidido también hacer mock de todas las funciones para evitar errores.

En cuanto a los test que he realizado, cubren principalmente los requisitos obligatorios de la prueba para la Hackaton:
- Renderizado de componentes
- Funcionalidad de búsqueda y filtrado
- Persistencia del sistema de favoritos
- Comportamiento de navegación y enrutamiento

### Obtención de Datos

**Decisión: API Fetch Nativa con Hooks Personalizados**

He decidido no usar Axios o similares para tener menos dependencias externas. Además, la llamada era manejable con api fetch nativo y los errores se podían manejar de forma sencilla. Eso junto con los hooks personalizados hacen que la obtención de datos sea fluida y fácil de mantener.

### Implementación de TypeScript

**Decisión: Configuración Estricta de TypeScript**

Hoy en día me parece esencial usar Typescript. Ahorra errores, permite encontrar bugs con facilidad y facilita inmensamente el testing.

## Mejoras futuras

**1. Implementación de Scroll Virtual**: 
En este caso no molestaba, pero con más de 50 pokemon necesitaría un scroll mejorado:
- **Problema**: La lista grande de Pokémon puede causar problemas de rendimiento
- **Solución**: Implementar scroll virtual para renderizar solo elementos visibles
- **Impacto**: Rendimiento mejorado con datasets grandes

**2. Mejoras de Accesibilidad**: 
No he tenido tiempo de aplicar todos los elementos de accesibilidad que me habría gustado, así que haría esto:
- **Soporte para lectores de pantalla**: Etiquetas ARIA y HTML semántico
- **Navegación por teclado**: Accesibilidad completa por teclado
- **Modo de alto contraste**: Revisar los colores

**3. Búsqueda y Filtrado Avanzados**: 
Si lanzase la app, me gustaría añadir filtros para otras características: habilidades, generaciones, etc.
- **Búsqueda multi-criterio**: Buscar por estadísticas, habilidades o generación
- **Filtros avanzados**: Filtros de generación, región o etapa de evolución

**4. Aplicación Web**: 
Creo que es muy buen proyecto para lanzar como app web y, en el futuro, como app de móvil:
- **Funcionalidad offline**: Cache de datos críticos para uso sin conexión
- **Prompt de instalación**: Permitir instalación como aplicación nativa
- **Notificaciones push**: Actualizaciones sobre nuevos Pokémon o características

**5. Arquitectura de Micro-Frontend**: 
No tengo experiencia con micro-frontend así que sería una buena app por donde empezar:
- **Desarrollo modular**: Dividir características en micro-frontends independientes
- **Despliegue independiente**: Desplegar características de forma independiente con Docker
- **Diversidad tecnológica**: Usar diferentes frameworks para diferentes características

Esto es lo que mejoraría de la Pokédex. También me gustaría pulir estilos y fluidez de la aplicación, ya que no he tenido todo el tiempo que me habría gustado para crear el proyecto. Por lo demás, estoy muy contenta con cómo me ha quedado.