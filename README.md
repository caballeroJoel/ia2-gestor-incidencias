# Gestor de incidencias

SPA en JavaScript vanilla con Vite para gestionar incidencias: listado, detalle, alta, edición, eliminación y filtro por estado, con persistencia en `localStorage`.

Proyecto IA2 · M0612 · DAW2.

## Instalación y scripts

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # genera dist/
npm run preview   # sirve dist/ para comprobar el build
```

## Estructura

```
index.html                          header y nav fijos, <main id="app"> donde se pintan las vistas
src/
├── main.js                         punto de entrada: escucha hashchange y pinta en #app la vista del router
├── router.js                       resolverRuta(hash): decide qué vista devolver según el hash
├── styles.css                      estilos
├── utils.js                        escaparHtml(): escapa texto de usuario antes de usar innerHTML
├── components/
│   ├── Listado.js                  tabla de incidencias con enlace al detalle (devuelve un string HTML)
│   └── Detalle.js                  ficha de una incidencia o "no encontrada" (devuelve un string HTML)
└── services/
    └── incidenciasService.js       dueño de los datos; devuelve copias (lista o una por id)
```

## Modelo

| Campo | Valores |
|---|---|
| `id` | único y estable (`inc-1` para el ejemplo) |
| `titulo`, `descripcion`, `asignado` | texto |
| `estado` | `abierto`, `en proceso`, `cerrado` |
| `prioridad` | `baja`, `media`, `alta` |
| `fechaCreacion` | fecha ISO 8601 |

## Rutas

| Ruta | Vista | Estado |
|---|---|---|
| `#/incidencias` | Listado | hecho (E02) |
| `#/incidencias/nueva` | Alta | pendiente (E03) |
| `#/incidencias/ID` | Detalle | hecho (E02) |
| `#/incidencias/ID/editar` | Edición | pendiente (E03) |

Sin hash se redirige a `#/incidencias`. Cualquier otra ruta muestra "Vista no encontrada". El id se codifica con `encodeURIComponent` al crear el enlace y se descodifica en el router.

**Limitación conocida:** hasta E03, `#/incidencias/nueva` (enlace "Nueva incidencia" del nav) se trata como un detalle con id `nueva` y muestra "Incidencia no encontrada".

## Idioma y nombres

El enunciado está en catalán. Con permiso del profesor, ramas, commits, títulos de PR, rutas y campos están en castellano, manteniendo el formato de los mensajes (`feat(ia2-eNN): ...`).

El primer commit (`iniciar gestor de incidencias con vite`) no sigue el formato `chore(ia2): ...`. No se ha reescrito porque ya estaba publicado en `main`.

## Comprobaciones

### E01 · Modelo, módulos y listado (v0.1.0)

- ✅ Se muestra la tabla con la incidencia de ejemplo.
- ✅ Un título con `<b>hola</b>` se muestra como texto, sin interpretar el HTML.
- ✅ Con el array vacío se muestra "No hay incidencias.".
- ✅ `npm run build` sin errores y `npm run preview` muestra la tabla.

### E02 · Router y vista de detalle (v0.2.0)

- ✅ Abrir la raíz sin hash redirige a `#/incidencias`.
- ✅ Clic en el título de la tabla abre su detalle con todos los campos.
- ✅ `#/incidencias/inc-999` y `#/incidencias/` muestran "Incidencia no encontrada".
- ✅ Una ruta inventada (`#/loquesea`) muestra "Vista no encontrada".
- ✅ "Volver al listado" y los botones atrás/adelante del navegador funcionan.
- ✅ Sin errores en la consola del navegador.
- ✅ `npm run build` sin errores.
- ✅ `npm run preview` funciona igual que `npm run dev`.
