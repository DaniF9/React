//import {heroes} from './data/heroes.js' // el heroes es del const del obj heroes.js
//console.log(heroes);
import heroes  from "../data/heroes";
//import heroes,{owners}  from "../data/heroes";


//console.log(owners)
/*
const getHeroeByid = (id) => {
    return heroes.find((heroe) => {
        if (heroe.id === id){
            return true;
        }else{
            return false;
        }
    });
}

console.log(getHeroeByid(2));
*/

export const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id) 
     
}
