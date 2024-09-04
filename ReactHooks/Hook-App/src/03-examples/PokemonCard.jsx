import { useLayoutEffect,useRef, useState } from "react"


export const PokemonCard = ({id,name,sprites = []}) => {

    const pRef = useRef();
    const [boxSize,SetBoxSize] = useState({with:0, height:0});
    useLayoutEffect(() => {
        const {height,width} = (pRef.current.getBoundingClientRect() );
        SetBoxSize({height,width})        
    }, [name]);

  return (
    <section
        style={{height:200}}>
            <h2 ref={pRef} className="text-capitalize">#{id} - {name}</h2>

            {/* Imagenes */}
            <div>
                {
                    sprites.map(sprite =>(
                       <img key={sprite} src={sprite} alt="name" /> 
                    ))
                }
            </div>
        </section>
  )
}

