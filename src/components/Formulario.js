import { escaparHtml } from "../utils.js";

export function Formulario({ incidencia = {}, errores = {} }) {
    return `
        <form>
            <label for="titulo">Título:</label>
            <input type="text" name="titulo" id="titulo" value="${escaparHtml(incidencia.titulo ?? '')}">
            <p>${errores.titulo ?? ''}</p>

            <label for="descripcion">Descripción:</label>
            <textarea name="descripcion" id="descripcion">${escaparHtml(incidencia.descripcion ?? '')}</textarea>
            <p>${errores.descripcion ?? ''}</p>

            <label for="asignado">Asignado:</label>
            <input type="text" name="asignado" id="asignado"  value="${escaparHtml(incidencia.asignado ?? '')}">
            <p>${errores.asignado ?? ''}</p>
            
            <label for="estado">Estado:</label>
            <select id="estado" name="estado">
                <option value="abierto" ${incidencia.estado === 'abierto' ? 'selected' : ''}>Abierto</option>
                <option value="en proceso" ${incidencia.estado === 'en proceso' ? 'selected' : ''}>En proceso</option>
                <option value="cerrado" ${incidencia.estado === 'cerrado' ? 'selected' : ''}>Cerrado</option>
            </select>
            <p>${errores.estado ?? ''}</p>
            
            <label for="prioridad">Prioridad:</label>
            <select id="prioridad" name="prioridad">
                <option value="alta" ${incidencia.prioridad === 'alta' ? 'selected' : ''}>Alta</option>
                <option value="media" ${incidencia.prioridad === 'media' ? 'selected' : ''}>Media</option>
                <option value="baja" ${incidencia.prioridad === 'baja' ? 'selected' : ''}>Baja</option>
            </select>
            <p>${errores.prioridad ?? ''}</p>

            <input type="submit" value="Crear Incidencia">
            <a href="#/incidencias">Cancelar</a>
            
        </form>
    `;
}