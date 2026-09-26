# Yobasol — Servicio técnico electrónico

Web corporativa desarrollada para Yobasol, un servicio de diagnóstico y reparación de placas electrónicas para climatización, maquinaria deportiva y electrónica de potencia.

**Web publicada: [yobasol.com](https://yobasol.com)**

El repositorio contiene el frontend de la web y una API Java en desarrollo. La web está desplegada en el dominio del cliente.

## La web

- Diseño adaptado a escritorio y móvil.
- Secciones de Servicios, Proceso, Garantía y Contacto, con navegación mediante enlaces internos.
- Contacto directo por WhatsApp y llamada telefónica.
- Fondos con motivos de circuitos y cuadrículas, y una imagen de fondo en la cabecera principal.
- Animaciones de entrada que respetan la preferencia de movimiento reducido.
- Título y descripción para buscadores, encabezados semánticos y estilos de foco para navegación con teclado.

El frontend utiliza **HTML, CSS y JavaScript**, sin framework ni proceso de compilación. Las tipografías Manrope y DM Mono se cargan desde Google Fonts.

## Estructura del repositorio

```text
frontend/                       # Versión actual de la web
├── index.html
├── css/
│   ├── style.css
│   └── mobile-fixes.css
├── js/
│   └── main.js
└── assets/images/

backend/
└── yobasol-api/                 # API Spring Boot en desarrollo
    ├── pom.xml
    ├── mvnw
    ├── mvnw.cmd
    └── src/

index.html                      # Copia anterior del frontend
css/
js/
assets/
```

Los archivos de la raíz se conservan como una versión anterior. Para consultar o modificar la web actual, utiliza **`frontend/`**.

## Ver la web en local

Abre `frontend/index.html` en un navegador. No es necesario instalar dependencias ni arrancar el backend para ver la web y utilizar los enlaces de contacto.

## Backend en desarrollo

La API utiliza **Java 25, Spring Boot y Maven**, con dependencias para atender peticiones HTTP y validar datos.

Actualmente incluye estas rutas:

| Método | Ruta | Función |
| --- | --- | --- |
| `GET` | `/api/health` | Devuelve `OK` para comprobar que la API responde. |
| `POST` | `/api/contact` | Recibe y valida una solicitud de contacto y devuelve una confirmación. |

El backend forma parte del aprendizaje y desarrollo del proyecto. Todavía no guarda solicitudes en una base de datos ni envía correos. El formulario permanece oculto en el frontend; el contacto visible se realiza mediante WhatsApp y teléfono.
