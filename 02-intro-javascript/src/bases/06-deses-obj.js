//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment



const persona = {
    nombre:'Tony',
    edad:45,
    clave:'Ironman',
    rango:'Soldado'

}
//const {nombre,edad,clave} = persona;
//console.log(nombre)
//console.log(edad)
//console.log(clave)
//console.log(persona.edad)
//console.log(persona.clave)
/*
const retornaPersona = ({nombre,edad,rango}) =>{
    //console.log(usuario)
    console.log(nombre,edad,rango='Capitan')
}

retornaPersona(persona);
*/

const useContext = ({clave,nombre,edad,rango = 'Caapitan'}) => {
    return {
        nombreClave:clave,
        anios:edad,
        latlng:{
            lat:14.43,
            lng: -12.34
        }
        
    }
}

const {nombreClave,anios,latlng:{lat,lng}} = useContext(persona);
console.log(nombreClave,anios)
console.log(lat,lng)
// podriamos dejar solo latlng y al imprimir hariamos
//lo siguiente  - const {lat,lng } = latlng;