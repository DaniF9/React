import { memo } from "react"

export const Small = memo(({value}) => { //Aqui ocupamos el metodo memo para memorizar y no renderizar este componente muchas veces

    console.log("Me volvi a dibujar")
  return (
    
      <small>{value}</small>
    
  )
})

