import './styles.css'
import { resolverRuta } from './router.js';

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

