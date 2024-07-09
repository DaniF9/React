// Promesas 
import {getHeroeById} from './bases/08-imp-exp'


// const promesa = new Promise((resolve,reject) => {

//     setTimeout(() => {
//         //Tarea: importar el getHeroById
//         const p1 = getHeroById(2);
//         console.log(heroe)

//         resolve(p1);
//         //reject ('No se puedo encontrar el heroe')
//     }, 2000);

// });


// promesa.then( (heroe) =>{
//     console.log('Heroe',heroe)
// });
// //.catch(err => console.warn(err))


const getHeroByIdAsync = (id) => { 
    return new Promise((resolve,reject) => {

        setTimeout(() => {
        const p1 = getHeroeById(2);
        if(p1){
            resolve(p1);
        }else{
            reject('No se pudo encontrar el heroe');
        }
        //resolve(p1);
        //         //reject ('No se puedo encontrar el heroe')
        }, 2000);
        
    });

    
}

getHeroByIdAsync(1)
    .then(console.log)
    .catch(err => console.warn(err))