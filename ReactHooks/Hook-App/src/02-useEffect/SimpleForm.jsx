import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState,setFormState]= useState({
        username: 'strider',
        email: 'daniel@gmail.com'
    });

    
    const {username,email} = formState; // Desestructuramos el formState


    const onInputChange = ({target}) => {

        const {name,value} = target; //igual se desestructura
        setFormState({
            ...formState, // Se hace para mantener todos los valores del formulario
            [name]: value //propiedad computado del objeto
        })
        //console.log(event.target.name)
    }


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

    <h1>Formulario Simple</h1>
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
      
      {
        (username == 'strider2') && <Message/>
      }
    </>
  )
}


