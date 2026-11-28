import { Listado } from './components/Listado.js';
import { Detalle } from './components/Detalle.js';
import { Formulario } from './components/Formulario.js';
import { obtenerIncidencias, obtenerIncidencia } from './services/incidenciasService.js';

export function resolverRuta(hash) {
  const ruta = hash.slice(2).split('/');

  if (ruta.length === 1 && ruta[0] === 'incidencias') {
    return Listado({ incidencias: obtenerIncidencias() });
  }
  
  if (ruta.length === 2 && ruta[0] === 'incidencias' && ruta[1] === 'nueva') {
    return Formulario({});
  }

  if (ruta.length === 3 && ruta[0] === 'incidencias' && ruta[2] === 'editar') {
    const inc = obtenerIncidencia(decodeURIComponent(ruta[1]));
    return inc ? Formulario({ incidencia: inc }) : Detalle({ incidencia: null });
  }

  if (ruta.length === 2 && ruta[0] === 'incidencias') {
    const id = decodeURIComponent(ruta[1]);
    return Detalle({ incidencia: obtenerIncidencia(id) });
  }

  return `
    <p>Vista no encontrada. <a href="#/incidencias">Volver al listado</a>.</p>
  `;
}