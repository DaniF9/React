import {fireEvent, render,screen} from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

//Esto fue una tarea
// Test: Debe de hacer match con el snapshot
//Test: Debe de mostart el valor inicial de 100

describe('Pruebas en el CounterApp', () => {
    const initialValue = 10;
    test('debe hacer match con el snapshot', () => {

        
        const {container} = render(<CounterApp value={initialValue}/>)
        expect(container).toMatchSnapshot();
      
    });


    test('debe de mostrar el valor inicial de 100 ', () => {

        render(<CounterApp value = {100}/>);
        expect(screen.getByText(100)).toBeTruthy();
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain('100');
      
    });

    test('debe incrementar con el boton +1', () => {

        render(<CounterApp value = {initialValue} />);
        fireEvent.click(screen.getByText('+1'));  // Con este se hacen evento s de click 
        expect(screen.getByText('11')).toBeTruthy();
      
    });

    test('debe decrementar con el boton de -1', () => {

        render(<CounterApp value = {initialValue} />);
        fireEvent.click(screen.getByText('-1'));  // Con este se hacen evento s de click 
        //screen.debug() Podemos ver que tiene nuestro componente
        expect(screen.getByText('9')).toBeTruthy();
      
    });

    test('debe de funcionar el boton de reset', () => {

        render(<CounterApp value = {200} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        //fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button', {name:'btn-reset'})) // El btn-reset viene del HTML del CounterAPP.jsx
        expect(screen.getByText(200)).toBeTruthy();
      
    })
    
    
    // Link de github: https://github.com/Klerith/react-vite-counter-app/tree/fin-seccion-5
    
    
})
