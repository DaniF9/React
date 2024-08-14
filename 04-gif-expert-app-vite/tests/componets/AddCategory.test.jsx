import {fireEvent, render,screen} from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en AddCategory', () => {
    test('debe de cambiar el valor de la caja de texto', () => {

      render(<AddCategory onNewCategory={ () =>{} }/>); // Se crea el sujeto de pruebas
      const input = screen.getByRole('textbox'); // Con esto disparamos un evento, extraemos el input
      fireEvent.input(input, {target:{value:'Saitama'}}); // Disparamos el evento
      expect(input.value).toBe('Saitama'); // Hacemos la prueba
    })
    

    test('debe de llamar onNewCategory si el input tiene algun valor', () => {

        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target:{value:inputValue}});
        fireEvent.submit(form);
        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled(); // Verifica que se llame la funcion
        expect(onNewCategory).toHaveBeenCalledTimes(1); // Que solo se llame una vez la funcion

        expect(onNewCategory).toHaveBeenCalledWith(inputValue); // Evalua que la funcion que se llama con el valor de la caja de texto


      
    })

    test('No debe llamar el onNewCategory si el input esta vacio', () => {

        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewCategory).not.toHaveBeenCalled();




      
    })
    
    
  
})
