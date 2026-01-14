# Loopstudios Landing Page

Landing page responsive para Loopstudios, una empresa de realidad virtual interactiva.

## 🎯 Enfoque General

El objetivo fue construir la landing respetando fielmente el diseño provisto, priorizando:

- maquetación pixel perfect,
- estructura HTML clara y semántica,
- CSS escalable y mantenible,
- JavaScript mínimo y encapsulado para el menu mobile.

El proyecto está organizado por secciones claras: **Header, Hero, FeatureCard, Creations y Footer**, todas contenidas bajo un sistema de `container` reutilizable para mantener consistencia de layout.

## 🎨 Decisiones Relevantes de CSS

### Sistema de Tokens

Se implementó un sistema completo de tokens CSS en `:root` para centralizar todos los valores de diseño:

#### Colores
```css
--color-white: white;
--color-black: black;
--color-gray: #8c8c8c;
```

#### Espaciados (Spacings)
Todos los espaciados están definidos en `rem` para mejor escalabilidad:
- `--spacing-xs`: 1.5rem (24px)
- `--spacing-sm`: 1.7rem (28px)
- `--spacing-md`: 2rem (32px)
- `--spacing-40`: 2.5rem (40px)
- `--spacing-lg`: 3.75rem (60px)
- `--spacing-60`: 4rem (64px)
- `--spacing-74`: 4.625rem (74px)
- `--spacing-xl`: 10rem (160px)

#### Gaps
- `--gap-xs`: 1rem
- `--gap-sm`: 1.875rem
- `--gap-md`: 2rem
- `--gap-lg`: 2.5rem

#### Fuentes
- **Familias**: `--font-family-alata`, `--font-family-josefin`
- **Tamaños**: Tokens específicos para mobile, tablet y desktop

**Justificación**: Este sistema permite cambios globales desde un solo lugar, mejora la consistencia visual y facilita el mantenimiento del código.

### Imágenes Responsive

Se implementó el uso del elemento `<picture>` con `srcset` para servir imágenes optimizadas según el viewport:

```html
<picture>
  <source media="(min-width: 64rem)" srcset="assets/images/desktop/image-hero.jpg">
  <img src="assets/images/mobile/image-hero.jpg" alt="Description">
</picture>
```

**Justificación**: Esto mejora significativamente el rendimiento al cargar imágenes apropiadas para cada dispositivo, reduciendo el ancho de banda y mejorando los tiempos de carga y evitando tener que cargar las imagenes por hacks en CSS.

### Organización del CSS

El CSS está organizado siguiendo el orden de aparición en el HTML:
1. Variables globales (`:root`)
2. Reset y estilos base
3. Header y navegación
4. Hero section
5. FeatureCard section
6. Creations section
7. Footer

Se utilizan solo dos media queries para todo el código (tablet y desktop), dentro de los cuales se identifica claramente qué código pertenece a cada componente mediante comentarios y agrupación lógica.Esta organización evita que el CSS sea muy largo, facilita la navegación del código y hace más fácil encontrar y modificar estilos relacionados, manteniendo todos los estilos responsive agrupados por breakpoint.

### Uso de Unidades REM

- Facilidad de cálculo (1rem = 16px por defecto)
Las unidades REM son más accesibles y escalables que los píxeles, permitiendo que el diseño se adapte mejor a las preferencias del usuario.

## 📱 Cómo Resolví el Responsive

### Estrategia Mobile-First

El diseño comienza con estilos base para mobile y luego se adapta a pantallas más grandes:

```css
/* Mobile (base) */
.creations__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-md);
  padding: var(--spacing-74) var(--spacing-xs);
}

/* Tablet */
@media (min-width: 48rem) {
  .creations__grid {
    grid-template-columns: repeat(2, 1fr);
    padding: var(--spacing-xl) var(--spacing-xs);
  }
}

/* Desktop */
@media (min-width: 64rem) {
  .creations__grid {
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacing-lg);
  }
}
```

### Breakpoints

- **Mobile**: Base (hasta 48rem / 768px)
- **Tablet**: `min-width: 48rem` (768px)
- **Desktop**: `min-width: 64rem` (1024px)

### Estrategias Implementadas

1. **Navegación**: Menú hamburguesa en mobile que se transforma en navegación horizontal en desktop
2. **Imágenes**: Uso de `<picture>` con `srcset` para servir imágenes optimizadas según el viewport
3. **Grid/Flexbox**: 
   - Creations grid: columna única en mobile, grid 4x2 en desktop
   - FeatureCard: columna en mobile, fila con overlay en desktop
4. **Tipografía**: Tamaños de fuente adaptativos usando tokens específicos por breakpoint
5. **Espaciados**: Padding y margins que se ajustan según el viewport usando los tokens definidos

### Contenedores Responsive

Se implementaron contenedores con `max-width` diferentes para cada breakpoint:
- Mobile: sin max-width (usa padding del container)
- Tablet: `--container-max-width-tablet: 45rem`
- Desktop: `--container-max-width: 72.5rem`

## 🔮 Qué Mejoraría con Más Tiempo

1. **Optimización de Imágenes**: 
   - Implementar formatos modernos (WebP, AVIF) con fallbacks
   - Lazy loading para imágenes fuera del viewport inicial

2. **Accesibilidad**:
   - Mejorar el contraste de algunos elementos
   - Agregar más landmarks ARIA
   - Mejorar accesibilidad del menú mobile (focus trap y manejo de foco al cerrar)


3. **Mantenibilidad**:
   - Separar el CSS en módulos (header.css, hero.css, etc.)

4. **Testing**:
   - Agregar tests visuales o checklist de QA para evitar regresiones.

## 🔗 Links

- **Repositorio**: [https://github.com/angelicamolero/loopstudios-landing-angelicamolero](https://github.com/angelicamolero/loopstudios-landing-angelicamolero)
- **Deploy**: 

---

**Autor**: Angelica Molero
