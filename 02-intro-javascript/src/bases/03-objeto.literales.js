const persona =  {
    nombre: 'Daniel',
    apellido: 'Fragoso',
    edad: 23,
    dierccion:{
        ciudad: "New York",
        zip: 5233,
        lat:14.34,
        lng:34.43
    }
};


console.log(persona) // Esto se puede imprimir normal
console.log({persona}) // Si tenemos mas objeto podemos ver a cual estamos llamando
console.table(persona) // Esto nos entrega una salida en consola pero con formato de tabla

//const persona2 = persona; // Esto copia la referencia en espacio en memoria, clonacion de referencia pero esto no es conveniente en react
//persona2.nombre = "Peter";
//console.log(persona2)


// Lo mejor es crear un nuevo objeto
/*
const persona2 = {
    nombre: "Carlos",
    apellido:"Bautista"
}
*/

// javascripto en ecmacscrip en el 6 incluyo el spred para extraer propiedades de un objeto y asignarlas en un nuevo objeto 
const persona2 = {...persona};
persona2.nombre = "Peter";
console.log(persona)
console.log(persona2)