import { render } from '@testing-library/react';
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en FirsApp', () => {
    // test('Debe de hacer match con el snapshot', () => {

    //     const tittle = 'Hola soy Daniel';
    //     const{container} = render( <FirstApp tittle={tittle}/>);    //Render lo que hace es renderizar el componente en memoria
        
    //     expect(container).toMatchSnapshot() // Esto nos creo la carpeta snapshot
      
    // });
    
    test('Debe de mostrar el titulo en un h1', () => {
      
        const tittle = 'Hola soy Daniel';
        const{container, getByText,getByTestId} = render( <FirstApp tittle={tittle}/>)

        expect(getByText(tittle)).toBeTruthy();
        expect(getByTestId('test-title').innerHTML).toBe(tittle) //Esto es para el ifentificardor test que esta en el FirstApp
        

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(tittle);
    })

    test('debe mostrar el subtitulo enviado por props', () => {
        const tittle = 'Hola soy Daniel';
        const subTittle = 'Soy un subtitulo';
        const {getAllByText} = render(
            <FirstApp
                tittle={tittle}
                subTittle={subTittle}
            />
        )
        expect(getAllByText(subTittle).length).toBe(1);
      
    })
    
    
  
})
