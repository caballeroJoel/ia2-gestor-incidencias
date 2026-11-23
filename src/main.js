import './styles.css'
import { obtenerIncidencias } from './services/incidenciasService.js';
import { Listado } from './components/Listado.js';

const app = document.querySelector("#app");

app.innerHTML = Listado({incidencias: obtenerIncidencias()});