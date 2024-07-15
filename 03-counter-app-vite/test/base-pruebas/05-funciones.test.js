import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas 05-Funciones', () => {

    test('getUser debe de retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123', // Aunque sean los mismos apuntan a un diferente espacio en memoria por lo cual el tobe no se cumple
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(testUser).toEqual(user);
    })
    

    test('getUsuarioActivo debe de retornar un objeto ', () => {


        const name = 'Daniel';
        const user = getUsuarioActivo(name);

        expect(user).toStrictEqual({
            uid:'ABC567',
            username:name
        })
        

      
    })
    
  
})
