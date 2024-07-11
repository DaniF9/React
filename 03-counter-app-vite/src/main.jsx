import React from 'react';    // Estos dos import se ocupan para renderizar la aplicacion
import ReactDOM from 'react-dom/client'; // Esto es por que estamos en web


// Estas ya son para exportar
//import {App} from './HelloWorldApp';
import {FirstApp} from './FirstApp'
import './styles.css';

/*
function App() {  // Esto se usa para hacer los componentes  "componentes basados en funciones"

    
    return <h1>Hola Mundo !!!</h1> // Esto era como lo que se tenia de la sig manera document.createElement...
}
*/

ReactDOM.createRoot(document.getElementById('root')).render(   // Renderizamos el componente en donde lo estemos ejecutando 
    <React.StrictMode>
        <FirstApp/>  
    </React.StrictMode>
);