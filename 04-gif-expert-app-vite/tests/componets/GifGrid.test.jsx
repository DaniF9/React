import {render} from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs'); // Con esto hace un Mock completo de todo el path 

describe('Pruebas en GifsGrid', () => {

    const category = 'One Punch'
    test('debe de mostart el loading inicialmente', () => {

        render(<GifGrid category={category}/>)
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
        
      
    })

    test('debe de mostrart items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({ // Con esto vamos a probar nuestro hook
            images: gifs,
            isLoading:false
        });

        render(<GifGrid category={category}/>)
        expect(screen.getAllByRole('img').length).toBe(2);
      
    })
    
    
  
})
