import { useState} from "react"

export const useCounter = (initialValue = 1) => {

    const [counter,setCounter] = useState(initialValue)

    const increment = (value =1 ) => { // Poniendo el value ahi hacemos que ese valor es el que se va a decrementar
        setCounter(counter + value)
    }

    const decrement = (value = 1) =>{
        if (counter == 0) return;
        setCounter(counter - value)
    }

    const reset = () =>{
        setCounter(initialValue)
    }



    return{
        
        // Exponemos nuestras funciones para ocuparlas en CounterWithCustomHok
        counter,  //Este es el counter del hook
        increment, // Esta es la funcion que incrementa
        decrement, // Funcion que decrementa el contador
        reset // Esto resetea los valores
    }
}