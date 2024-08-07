import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {

    test('Debe de retornar un heroes', (done) => {  // Es una funcion que se llama cuando se termina de ejecutar el codigo
        
        const id = 1;

        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                
                done();
            });
            


    });



    test('getHeroeByIdAsync debe de obtener error si heroe no existe', () => {  // Es una funcion que se llama cuando se termina de ejecutar el codigo
        
        const id = 100;

        getHeroeByIdAsync(id)
            .then(hero =>{
                expect(hero).toBeFalsy();
                done();
            })
            .catch(error =>{

                expect ( error ).toBe(`No se puede encontrar el heroe ${id}`);
                done();

            });


    });
    
  
})
