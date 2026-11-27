import { Listado } from './components/Listado.js';
import { obtenerIncidencias } from './services/incidenciasService.js';
import { escaparHtml } from './utils.js';

export function resolverRuta(hash) {
  const ruta = hash.slice(2).split('/');

  if (ruta.length === 1 && ruta[0] === 'incidencias') {
    return Listado({ incidencias: obtenerIncidencias() });
  }

  if (ruta.length === 2 && ruta[0] === 'incidencias') {
    const id = decodeURIComponent(ruta[1]);
    return `<p>Detalle de ${escaparHtml(id)}</p>`;
  }

  return `
    <p>Vista no encontrada. <a href="#/incidencias">Volver al listado</a>.</p>
  `;
}