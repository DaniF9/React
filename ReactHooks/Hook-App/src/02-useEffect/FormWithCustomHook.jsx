import { useEffect, useState } from "react"
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {

    /*  ESTO LO MANDAMOS PARA NUESTRO CUSTOMHOOK
    const [formState,setFormState]= useState({
        username: '',
        email: '',
        password:''
    });

    
    const {username,email,password} = formState; // Desestructuramos el formState


    const onInputChange = ({target}) => {

        const {name,value} = target; //igual se desestructura
        setFormState({
            ...formState, // Se hace para mantener todos los valores del formulario
            [name]: value //propiedad computado del objeto
        })
        //console.log(event.target.name)
    }
    */

    const {formState,onInputChange,onResetForm,username,email,password} = useForm({
        username:'',
        email:'',
        password:''
    })

    //const {username,email,password} = formState; // Podemos extraer esto rapidamente y podemos extraer los valor desde la lineas de arriba
                                                // Lo que haremos es en nuestro useForm desestructurar el formState.

    useEffect(() => {
        // console.log('useEfect called');
    },[]);

    useEffect(() =>{
        // console.log('formState changed')
    },[formState]);

    useEffect(() =>{
        // console.log('email changed')
    },[email])

    useEffect(() => {
        console.log('Message Mounted')
        return () => {
            console.log('Message Unmounted')
        }        
    }, []);

  return (
    <>

    <h1>Formulario con Custom Hook</h1>
    <hr />

    <input type="text" 
    className="form-control"
    placeholder="Username"
    name="username"
    value={username}
    onChange={onInputChange}
    />

    <input 
    type="email" 
    className="form-control mt-2"
    placeholder="dani@gmail.com"
    name="email"
    value={email}
    onChange={onInputChange}
    />

    <input type="password"
    className="form-control mt-2"
    placeholder="Contraseña"
    name="password"
    value={password}
    onChange={onInputChange}
    />


    <button onClick={onResetForm} className="btn btn-primary mt-2">Reset</button>
      
      
    </>
  )
}


