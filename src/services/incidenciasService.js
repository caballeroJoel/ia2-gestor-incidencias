const incidencias = [
    {
        id: "inc-1",
        titulo: "Reparación PC Carlos",
        descripcion: "Reparar la fuente de alimentación del equipo de Carlos",
        estado: "abierto",
        prioridad: "alta",
        fechaCreacion: "2026-11-23T10:00:00.000Z",
        asignado: "Joel Caballero"
    }
]


export function obtenerIncidencias() {
    return structuredClone(incidencias);
}