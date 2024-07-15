import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => {

    test('debe de retornar un string y un numero', () => {

        const [letters,numbers] = retornaArreglo();
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123); //El tobe se encarga de evaluar los tipo de dato
    })
    
  
})
