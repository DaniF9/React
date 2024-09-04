import React from 'react'

export const ShowIncrement = ({increment}) => {
  return (
    <button
    className='btn btn-primary'
    onClick={()=>{
        increment(5); //Aqui pusimos el valor del value en el CallbackHook

    }}
    >
        incrementar
    </button>
  )
}

