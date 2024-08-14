import { useState } from "react";
//https://gist.github.com/Klerith/ca7e57fae3c9ab92ad08baadc6c26177 esto es para prepara el ambiente de pruebas
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {  //Descomponemos el setCategories, aqui se ponen todas las propiedades de nuestro componente

const [inputValue, setInputValue] = useState('');

const onInputChange = ({target}) => {

    setInputValue(target.value);
}

const onSubmit = (event) =>{ 
    event.preventDefault(); //Para no realizar la carga del navegador

    if (inputValue.trim().length <= 1) return; // Aqui es para que si lo que buscamos tienes menos de una letra no se guarde nada
    
    //setCategories(categories => [inputValue, ...categories]); //Aqui vamos a mandar a llamar un callback
    
    setInputValue('');
    onNewCategory(inputValue.trim());
}
  return (

    
    <>
      <form onSubmit={onSubmit} aria-label="form"> {/* aqui lo que se hace para dejar igual de la sig manera {(event) => onSubmit(event)}*/}
        <input 
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={ onInputChange}
        />
      </form>
    </>
  )
}


AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}


