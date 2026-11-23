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
├── main.js                         punto de entrada: renderiza la vista en #app
├── styles.css                      estilos
├── utils.js                        escaparHtml(): escapa texto de usuario antes de usar innerHTML
├── components/
│   └── Listado.js                  tabla de incidencias (devuelve un string HTML)
└── services/
    └── incidenciasService.js       dueño de los datos; devuelve copias
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
| `#/incidencias` | Listado | pendiente (E02), ahora se muestra siempre el listado |
| `#/incidencias/nueva` | Alta | pendiente (E03) |
| `#/incidencias/ID` | Detalle | pendiente (E02) |
| `#/incidencias/ID/editar` | Edición | pendiente (E03) |

## Idioma y nombres

El enunciado está en catalán. Con permiso del profesor, ramas, commits, títulos de PR, rutas y campos están en castellano, manteniendo el formato de los mensajes (`feat(ia2-eNN): ...`).

El primer commit (`iniciar gestor de incidencias con vite`) no sigue el formato `chore(ia2): ...`. No se ha reescrito porque ya estaba publicado en `main`.

## Comprobaciones

### E01 · Modelo, módulos y listado (v0.1.0)

- ✅ Se muestra la tabla con la incidencia de ejemplo.
- ✅ Un título con `<b>hola</b>` se muestra como texto, sin interpretar el HTML.
- ✅ Con el array vacío se muestra "No hay incidencias.".
- ✅ `npm run build` sin errores y `npm run preview` muestra la tabla.
