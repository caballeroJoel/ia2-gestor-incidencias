import { escaparHtml } from "../utils.js";

export function Detalle({ incidencia }) {
    if(incidencia === null) return `<p>Incidencia no encontrada. <a href="#/incidencias">Volver al listado</a></p>`;

    return `
        <h2>Título: ${escaparHtml(incidencia.titulo)}</h2>
        <dl>
            <dt>Id:</dt>
            <dd>${escaparHtml(incidencia.id)}</dd>
            
            <dt>Descripción:</dt>
            <dd>${escaparHtml(incidencia.descripcion)}</dd>
            
            <dt>Estado:</dt>
            <dd>${escaparHtml(incidencia.estado)}</dd>
            
            <dt>Prioridad:</dt>
            <dd>${escaparHtml(incidencia.prioridad)}</dd>
            
            <dt>Fecha de creación:</dt>
            <dd>${escaparHtml(incidencia.fechaCreacion)}</dd>
            
            <dt>Asignado:</dt>
            <dd>${escaparHtml(incidencia.asignado)}</dd>
        </dl>

        <a href="#/incidencias">Volver al listado</a>
    `;

}