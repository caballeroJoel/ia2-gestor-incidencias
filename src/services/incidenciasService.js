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

export function obtenerIncidencia(id) {
    const inc = incidencias.find(inc => inc.id === id) ?? null;

    return structuredClone(inc);
}

export function crearIncidencia(datos) {
    const nueva = {...datos, id: crypto.randomUUID(), fechaCreacion: new Date().toISOString()};
    incidencias.push(nueva);

    return structuredClone(nueva);
}

export function validarIncidencia(datos) {
    const errores = {};
    const estados = ["abierto", "en proceso", "cerrado"];
    const prioridades = ["alta", "media", "baja"];

    if(datos.titulo.trim() === ""){
        errores.titulo="El título es obligatorio";
    }

    if(datos.descripcion.trim() === ""){
        errores.descripcion="La descripción es obligatoria";
    }

    if(datos.asignado.trim() === ""){
        errores.asignado="Debe haber una persona asignada";
    }

    if(!estados.includes(datos.estado)){
        errores.estado="Estado no válido";
    }

    if(!prioridades.includes(datos.prioridad)){
        errores.prioridad="Prioridad no válida";
    }

    return errores;
}