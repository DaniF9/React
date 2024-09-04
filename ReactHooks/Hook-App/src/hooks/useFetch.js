import { useState,useEffect } from "react";

//Aqui vamos a manejar el cache

const localCache = {};

export const useFetch = (url) => {

    const [state, setState] = useState({
        data:'null',
        isLoading:true,
        hasError:false,
        error:null
    });

    useEffect(() => {
        //Aqui se podria poner la peticion pero el codigo seria muy largo asi que mejor se crea una funcion acontinuacion
        getFetch();
    }, [url]); // Esto por si el url cambia

    const setLoadingState = () => { //Por si llega a cambiar nuestro url se crea esta funcion para establcer los valores
        setState({
            data:'null',
            isLoading:true,
            hasError:false,
            error:null
        })
    }

    const getFetch = async() =>{

        if(localCache[url]){ // Esto lo hicismos para el manejo del cache
            console.log("Usando cache")
            setState({
                data:localCache[url],
                isLoading:false,
                hasError:false,
                error:null
            });

            return
        }

        setLoadingState();
        const resp = await fetch(url);

        await new Promise(resolve => setTimeout(resolve,1000))

        if(!resp.ok){
            setState({
                data:null,
                isLoading:false,
                hasError:true,
                error:{
                    code:resp.status,
                    message:resp.statusText,
                }
            });
            return; // esto es para que solo se llame una vez y no varias veces
        }


        const data = await resp.json();
        setState({
            data:data,
            isLoading:false,
            hasError:false,
            error:null,

        })

        //Manejo del cache
        localCache[url] = data;
    }

  return {

    data:state.data,
    isLoading:state.isLoading,
    hasError:state.hasError,

  }
}

