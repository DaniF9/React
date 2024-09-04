import { useState } from "react";


export const useForm = (initialForm = {}) => { //Con esto hacemos que podemos recibir lo que sea en nuestor formulario 
                                    // {} esto es por que el valor inicial es un ibjeto


    const [formState, setFormState] = useState(initialForm); // Esto se hace para que mandemos lo que sea de nuestor formulario 
                                                            // Los valores que se habian establecido


    // const [formState,setFormState]= useState({     // Esto se hace si la estructura de nuestro formulario siempre es la misma
    //     username: '',
    //     email: '',
    //     password:''
    // });

    
    //const {username,email,password} = formState; // Desestructuramos el formState


    const onInputChange = ({target}) => {

        const {name,value} = target; //igual se desestructura
        setFormState({
            ...formState, // Se hace para mantener todos los valores del formulario
            [name]: value //propiedad computado del objeto
        })
        //console.log(event.target.name)
    }


    const onResetForm = () => {
        setFormState(initialForm)
    }
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm

  }
  
}


