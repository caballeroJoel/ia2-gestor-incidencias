import { escaparHtml } from "../utils.js";

export function Listado({ incidencias }) {
    if(incidencias.length === 0) return "<p>No hay incidencias.</p>";

    const inci = incidencias.map(
        (inc) => `
            <tr>
                <td>${escaparHtml(inc.titulo)}</td>
                <td>${escaparHtml(inc.estado)}</td>
                <td>${escaparHtml(inc.prioridad)}</td>
                <td>${escaparHtml(inc.asignado)}</td>
            </tr>
        `
    ).join('');

    return `
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Estado</th>
                    <th>Prioridad</th>
                    <th>Asignado</th>
                </tr>
            </thead>
            <tbody>
                ${inci}
            </tbody>
        </table>
    `;
}