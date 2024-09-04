import { useState } from "react"

export const CounterApp = () => {


    const [state,setcounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })

    const {counter1,counter2,counter3} = state;
      return (
        <>
          <h1>Counter : {counter1} </h1>
          <h1>Counter: {counter2}</h1>
          <h1>Counter: {counter3}</h1>
          <hr />
    
          <button 
          className="btn btn-info" 
          onClick={()=> setcounter({
            ...state,
            counter1: counter1+1,
            
          })
    
          }>+1</button>
        </>
      )
    }

/* PODEMOS MEJORAR ESTO SE VERIA COMO EL CODIGO ANTERIOR
export const CounterApp = () => {


const [{counter1,counter2,counter3},setcounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
})
  return (
    <>
      <h1>Counter : {counter1} </h1>
      <h1>Counter: {counter2}</h1>
      <h1>Counter: {counter3}</h1>
      <hr />

      <button 
      className="btn btn-info" 
      onClick={()=> setcounter({
        counter1: counter1+1,
        counter2: counter2,
        counter3: counter3
      })

      }>+1</button>
    </>
  )
}

*/
