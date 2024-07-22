import { render,screen } from '@testing-library/react';
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en FirsApp', () => {

    const tittle = 'Hola soy Daniel'
    const subTittle = 'Soy un subtitulo'
    test('debe hacer match con el snapshot', () => {

        const {container} = render(<FirstApp tittle={tittle}/>);
        expect(container).toMatchSnapshot();
      
    });

    test('debe de mostrar el mensaje Hola soy Daniel', () => {

        render(<FirstApp tittle={tittle}/>);
        expect(screen.getByText(tittle)).toBeTruthy();

      
    });


    test('Debe de mostrar el titulo en un h1 ', () => {

        render(<FirstApp tittle={tittle}/>);
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(tittle);
      
    });

    test('Debe enviar el subtitulo envia do por props', () => {
        render(
        <FirstApp 
            tittle={tittle}
            subTittle={subTittle}
        />
        );

        expect(screen.getAllByText(subTittle).length).toBe(1);
    })
    
    
    
    
    
    
  
})
