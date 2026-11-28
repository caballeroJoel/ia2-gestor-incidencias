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
├── main.js                         punto de entrada: escucha hashchange, pinta en #app la vista del router y gestiona el submit del formulario por delegación
├── router.js                       resolverRuta(hash): decide qué vista devolver según el hash
├── styles.css                      estilos
├── utils.js                        escaparHtml(): escapa texto de usuario antes de usar innerHTML
├── components/
│   ├── Listado.js                  tabla de incidencias con enlace al detalle (devuelve un string HTML)
│   ├── Detalle.js                  ficha de una incidencia o "no encontrada" (devuelve un string HTML)
│   └── Formulario.js               formulario de creación y edición de incidencias (devuelve un string HTML)
└── services/
    └── incidenciasService.js       dueño de los datos; devuelve copias (lista o una por id); actualiza, crea y valida
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
| `#/incidencias/nueva` | Alta | hecho (E03) |
| `#/incidencias/ID` | Detalle | hecho (E02) |
| `#/incidencias/ID/editar` | Edición | hecho (E03) |

Sin hash se redirige a `#/incidencias`. Cualquier otra ruta muestra "Vista no encontrada". El id se codifica con `encodeURIComponent` al crear el enlace y se descodifica en el router.

## Limitaciones conocidas

- Los datos solo se quedan en memoria hasta que se actualiza la web temporalmente (se resuelve en E05)
- Todavía no se pueden eliminar ni filtrar incidencias (se resuelve en E04)

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

### E03 · Formulario de alta y edición (v0.3.0)

- ✅ Una incidencia válida redirige a `#/incidencias/<id largo>`.
- ✅ El formulario vacío muestra tres errores: Título, Descripción y Asignado.
- ✅ Un título con solo espacios da error.
- ✅ Si hay errores, se conserva lo escrito en el resto de campos.
- ✅ Un título con `"hola" <b>x</b>` se muestra como texto en el formulario y en el detalle.
- ✅ Editar `inc-1` mantiene su id y su fecha.
- ✅ Un error al editar mantiene el botón "Guardar cambios".
- ✅ Al editar otra incidencia, el formulario muestra sus datos y no los de `inc-1`.
- ✅ `#/incidencias/inc-999/editar` muestra "Incidencia no encontrada".
- ✅ "Cancelar" en la edición vuelve al detalle sin cambios.
- ✅ "Cancelar" en el alta vuelve al listado sin crear nada.
- ✅ El formulario se puede usar solo con teclado.
- ✅ Sin errores en la consola del navegador.
- ✅ `npm run build` sin errores.
- ✅ `npm run preview` funciona igual que `npm run dev`.

## Trazabilidad

| Ejercicio | Sesiones | Rama | Commits | PR | Tag · merge | Comprobaciones |
|---|---|---|---|---|---|---|
| E01 | S2, S5, S6 | `ia2/e01-listado` | `ee36b91`, `91ebc3a` (fix), `b0d8d3d`, `f0f6a5c` | [#1](https://github.com/caballeroJoel/ia2-gestor-incidencias/pull/1) | `v0.1.0` · `59ac4cf` | 4/4 ✅ (ver E01) |
| E02 | S3, S6 | `ia2/e02-vistas` | `17e3094`, `3bec60d`, `17e16e4`, `6f75ade`, `3bfce4b` | [#2](https://github.com/caballeroJoel/ia2-gestor-incidencias/pull/2) | `v0.2.0` · `fe7f578` | 8/8 ✅ (ver E02) |
| E03 | S3, S4, S6 | `ia2/e03-formulario` | `b8f45a6`, `67ba9bb`, `docs (este commit)` | pendiente | pendiente | 15/15 ✅ (ver E03) |

PR, tag y SHA de merge de E03 se completarán en el commit docs de E04.
