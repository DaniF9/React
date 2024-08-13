import { useState } from "react" //Esto es para utilizar el usestate
import {AddCategory,GifGrid} from "./components";




export const GifExpertApp = () => {

  // cuando queremos almacenar info y esa cambia el html necesitamos usar un hook
  const [categories, setCategories]=useState(['One Punch']); 
  //console.log(categories);

  // const addCategory = () => {
  //   if (!categories.includes('Valorant')) {
  //     setCategories([...categories,'Valorant']);
  //   }
  //   else{
  //     alert("Ya haz agregado esa categoria");
  //   }
    
  // }

  const addCategory = (newCategory) => {

    if (categories.includes(newCategory)) return; //Aqui validamos si existe la categoria
    //setCategories(['Valorant', ...categories]);
    setCategories([newCategory, ...categories]); //El setcategories es de nuestro hook
  }
  return (
    <>
    {/* Titulo */}
      <h1>GiftExpertApp</h1>

      {/* Input */}

     <AddCategory
     // Aqui lo que haremos en emitir un un evento padre ya que lo que se busca es mandar el valor
      onNewCategory = {value => addCategory(value)} //Aqui mandamos a llamar a la funcion 
     //setCategories={setCategories}
     /> 

      {/* Listado de gif */}
      {/* <button onClick={addCategory}>Agregar Categoria</button> */}
      {/* <ol>
        {categories.map(category => {
          return <li key={category}>{category}</li>
          })
          
        }
      </ol> */}

      
        {
          categories.map((category) =>(  // Aqui podemos poner nuestor nuevo componente creado llamado GifGrid
            // <div key = {category}>
            //   <h3>{category}</h3>
            //   <li>{category}</li>
            // </div> ))

              <GifGrid 
              key = {category} 
              category={category}
              />

            ))
            
        
        }
      





          {/* Gif item */}
    </>
  )
}
