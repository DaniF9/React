import { useState } from "react" //Esto es para utilizar el usestate
import {AddCategory} from "./components/AddCategory";



export const GifExpertApp = () => {

  // cuando queremos almacenar info y esa cambia el html necesitamos usar un hook
  const [categories, setCategories]=useState(['One Punch','Dragon Ball']); 
  //console.log(categories);

  const addCategory = () => {
    if (!categories.includes('Valorant')) {
      setCategories([...categories,'Valorant']);
    }
    else{
      alert("Ya haz agregado esa categoria");
    }
    
  }
  return (
    <>
    {/* Titulo */}
      <h1>GiftExpertApp</h1>

      {/* Input */}

     <AddCategory/>

      {/* Listado de gif */}
      <button onClick={addCategory}>Agregar Categoria</button>
      <ol>
        {categories.map(category => {
          return <li key={category}>{category}</li>
          })
          
        }
      </ol>
          {/* Gif item */}
    </>
  )
}
