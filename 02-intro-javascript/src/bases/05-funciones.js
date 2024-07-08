// Funciones en JS
/*
function saludar(nombre){
    return `Hola, ${nombre}`;

}
    */

//Tambien podemos escribir la funcion de la siguiente manera

const saludar = function(nombre){
    return `Hola, ${nombre}`;
}

console.log(saludar)

// Funciones de felcha

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
    
}

console.log('Daniel')

// Podemos simpplificar lo anterior con lo siguiente

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo`;

console.log('Daninel')
console.log('Carlos')
console.log(saludar4());


// Algo que se utiliza en React es lo siguiente

const getUser = () =>({  //Se colocan los paretesis para que se entienda que devuelve un objeto
    uid:'ABC123',
    username:'123456'
});

const user = getUser();
console.log(user);


// Tarea 
//1. Transformar a una funcion de flecha
//2. Tiene que retornar un objeto implicito
//3.pruebas

/*
function getUsuarioActivo(){

    return{
        uid:'ASD456',
        username:nombre
    }
};

const usuarioActivo = getUsuarioActivo('Daniel Fragoso');
console.log(usuarioActivo);

*/ 

//Solucion 

const getUsuarioActivo = (nombre) => ({
    uid:'ASDFG',
    username:nombre
})

const usuarioActivo2 = getUsuarioActivo('Daniel Fragoso');
console.log(usuarioActivo2);