import React from 'react'
import { useCounter, useFetch } from '../hooks'
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHook = () => {

    const {counter,decrement,increment} = useCounter(1); // Esto lo que haces es llamar al customhook para usarlo, por eso lo desestructuramos
    const {data,hasError,isLoading}= useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    //fetch('https://pokeapi.co/api/v2/pokemon/1')

    
  return (
    <>

    <h1>Informacion de Pokemon</h1>

    <hr />

    {isLoading 
    ? <LoadingMessage/> 
    : (
        <PokemonCard
        id={counter}
        name={data.name}
        sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
        ]}
      />)
    }
     <h2>{data?.name}</h2>  {/*Esto lo que hace es si existe data solo muestra el nombre, si se quita el signo aparecera un error*/} 
    {/* <pre>{JSON.stringify(data,null,2)}</pre> */}

    <button onClick={() => counter > 1 ? decrement(): null} className='btn btn-primary mt-2'>Anterior</button>

    <button onClick={() => increment()} className='btn btn-primary mt-2'>Siguiente</button>
      
    </>
  )
}


