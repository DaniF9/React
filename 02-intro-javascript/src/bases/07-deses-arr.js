// Desestructuracion de arreglos


const personajes = ['carlos','daniel','fragoso'];
console.log(personajes[1])

const [, ,personaje1] = personajes; // Con las comas podemos taer la poscion del arreglo que qeurramos
console.log(personaje1)


const retonarArreglo = () => {
    return ['ABC',123];
}

const [letras,numeros] = retonarArreglo();
console.log(letras,numeros)

// Tarea  
//1. El primer valor del arr se llamara nombre
//2. Se llamara setnombre
const useState = (valor) => {
    return [valor, ()=>{console.log("Hola mundo")}];
}

//const arre = useState('daniel');
//arr[1]();

const [nombre,setNombre] = useState('Carlos');
console.log(nombre);
setNombre();
