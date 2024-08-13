
import {GifItem} from "./GifItem";
import {useFetchGifs} from '../hooks/useFetchGifs'


export const GifGrid = ({category}) => {  // La ejecuacion de una funcion nunca se debe poner dentro de un functional component
   
    
    //Todo lo anterior se redujo a lo siguiente

    const {images,isLoading} = useFetchGifs(category);

  return (
    <>

        <h3>{category}</h3>

        {
            isLoading && (<h2>Cargando ...</h2>)
        }

        <div className="card-grid">
            {
                // images.map(({id,title}) =>(
                //     <li key={id}>{title}</li>  //Se pone el id que se extrajo del API y el titulo igual del API
                // ))

                images.map((image) =>(
                    <GifItem 
                        key={image.id}
                        {...image}
                    />
                ))
            }
        </div>
        

        {/* {
            gifs.map(gif => (  //Aqui lo hacemos en forma de lista
                <p>{gif}</p>
            ))
        }      */}
    </>
  )
}

