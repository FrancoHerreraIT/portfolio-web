# Mi Portfolio Web — Franco Herrera Moyano

Portfolio personal armado con Angular 19. Muestra quién soy, mis proyectos y cómo contactarme.

## ¿Qué tiene?

- **Navbar** con scroll suave a cada sección
- **Hero** con presentación principal
- **Sobre mí** con info personal
- **Stack** con las tecnologías que uso
- **Proyectos** con las cosas que hice
- **Contacto** para que me escriban
- Diseño oscuro, responsive para mobile

## Stack usado

- [Angular 19](https://angular.dev) — framework principal
- [Angular Material](https://material.angular.io) — algunos componentes de UI
- CSS puro para los estilos customizados

## Cómo levantarlo

Necesitás tener Node.js instalado. Después:

```bash
# Instalar dependencias
npm install

# Levantar servidor local
ng serve
```

Abrí `http://localhost:4200` en el navegador y listo.

## Build para producción

```bash
ng build
```

Los archivos quedan en la carpeta `dist/`.

## Estructura del proyecto

```
src/
└── app/
    └── components/
        ├── navbar/     → barra de navegación
        ├── hero/       → sección principal
        ├── about/      → sobre mí
        ├── stack/      → tecnologías
        ├── projects/   → proyectos
        ├── offer/      → mi perfil técnico
        ├── contact/    → formulario de contacto
        └── footer/     → pie de página
```

## Notas

- Generado con Angular CLI v19.2.9
- Primera vez que hago algo serio en frontend, así que el código puede no ser perfecto pero funciona
