# Yobasol — frontal web

Landing page para **Yobasol Servicio Técnico Electrónico**. Es HTML, CSS y JavaScript puro: se puede abrir con Live Server en VS Code, sin instalar nada.

## Arrancar el proyecto

1. Abre esta carpeta en VS Code.
2. Abre `index.html` con la extensión **Live Server**.
3. La web aparecerá en el navegador.

## Qué está listo

- Landing de conversión con hero, prueba de confianza, servicios, proceso, garantías y contacto.
- Diseño responsive, navegación móvil y tema claro/oscuro persistente con `localStorage`.
- Animaciones de aparición que respetan la preferencia de movimiento reducido.
- Validación accesible del formulario en el navegador.

## Siguiente paso de backend (cuando lo estudiemos)

Ahora el formulario solo valida y muestra un mensaje. El punto de unión será sustituir el bloque de confirmación de `js/main.js` por una petición `fetch` a `POST /api/contact`. Así podremos crear la API sin rehacer el diseño ni el formulario.

## Estructura

```text
index.html
css/style.css
js/main.js
assets/images/hero-laboratorio.png
```
