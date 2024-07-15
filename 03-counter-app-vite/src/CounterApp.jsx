import {useState} from 'react';
import PropTypes from 'prop-types';
// Doumentacion oficial de react

//https://github.com/Klerith/react-vite-counter-app/tree/fin-seccion-4/src
export const CounterApp  =({value}) => {

    const [counter,setCounter] = useState(value)
    const handleAdd  = (event,newValue) => { //FUNCION FLECHA
        //console.log(event);
        //console.log('+1');

        setCounter(counter +1);
        //setCounter((c) => c+1);

    }

    const Decremento = () =>{
        setCounter(counter - 1);
    }

    const Resetear = () =>{
        setCounter(value);
    }

    return(
        <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>
        <button onClick={  handleAdd }> +1 </button>
        <button onClick={ Decremento }> -1 </button>
        <button onClick= { Resetear }> Reset </button>
        </>
    )
}

CounterApp.prototype = {
    value:PropTypes.number.isRequired
}

