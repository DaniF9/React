import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {

   
    const [counter,setCounter] = useState(10);
                                        //Estos son los argumentos si es objeto podriamos desestructurar
    const incrementFather = useCallback((value) => {
        setCounter((c) => c+value);
    }, []);

    useEffect(() => {
        
    }, [incrementFather]);



    // const incrementFather = () =>{
    //     setCounter(counter+1);     
    // }
  return (
    <>
      <h1>useCallback hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFather}/>
    </>
  )
}


