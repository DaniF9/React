import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeByIs debe retornar un heroe por ID', () => {

        const id = 1;
        const hero =getHeroeById(id);

        expect(hero).toEqual({id:1, name: 'Batman', owner: 'DC'})

        //console.log(hero);
      
    })


    
    test('getHeroeByIs debe retornar un undefined si no existe id', () => {

        const id = 100;
        const hero =getHeroeById(id);


        expect(hero).toBeFalsy(); // Esto es para evaluar que mi valor sea nulo, false o undefind
        //expect(hero).toEqual({id:1, name: 'Batman', owner: 'DC'})

        //console.log(hero);
      
    })


    // Tarea hacer las pruebas de getHeroesOwner
    // Debe de retornar un arreglo con los heroes de DC
    // Length === 3
    //toEqual al arreglo filtrado
    // debe de retornar un arreglo con los heroes de Marvel
    // Length === 2

    test('getHeroesOwner debe de regresar heroes DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            {id:1, name:'Batman',owner:'DC'},
            {id:3, name:'Superman',owner:'DC'},
            {id:4, name:'Flash',owner:'DC'}
        ])

        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner))
      
    })




    test('getHeroesOwner debe de regresar heroes Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner))
        console.log(heroes)
      
    })
    
    
  
})
