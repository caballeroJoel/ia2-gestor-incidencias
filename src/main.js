import './styles.css'
import { resolverRuta } from './router.js';
import { crearIncidencia, validarIncidencia, actualizarIncidencia } from './services/incidenciasService.js';
import { Formulario } from './components/Formulario.js';
import { Detalle } from './components/Detalle.js';

const app = document.querySelector("#app");

function render() {
    if(!location.hash) {
        location.hash = '/incidencias';
        return;
    }
    app.innerHTML = resolverRuta(location.hash);
}

window.addEventListener('hashchange', render);
render();

app.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const datos = Object.fromEntries(new FormData(e.target));

    const errores = validarIncidencia(datos);

    if(Object.keys(errores).length > 0) {
        app.innerHTML = Formulario({ incidencia: datos, errores});
        return;
    }

    const guardada = !datos.id ? crearIncidencia(datos) : actualizarIncidencia(datos.id, datos);

    if(guardada === null) {
        app.innerHTML = Detalle({ incidencia: null });
        return;
    }

    location.hash = `/incidencias/${encodeURIComponent(guardada.id)}`;

});