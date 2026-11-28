import './styles.css'
import { resolverRuta } from './router.js';
import { crearIncidencia, validarIncidencia } from './services/incidenciasService.js';
import { Formulario } from './components/Formulario.js';

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

    const creada = crearIncidencia(datos);

    location.hash = `/incidencias/${encodeURIComponent(creada.id)}`;

});