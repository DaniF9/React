// Operador Condicional Ternario



const activo = true;

let mensaje = '';


if (!activo) {

    mensaje = 'Activo';
    
}else{
    mensaje = 'Inactivo';
}


console.log(mensaje);


// Como seria en el operador ternario seria algo asi

const mensaje2 = (activo) ? 'Activo' : 'Inactivo';
console.log(mensaje2);

const mensaje3 = activo === true && 'Activo'; // Esta es una parte mas sencilla de realizar el if

console.log(mensaje3)



// LINK DEL REPOSITORIO: https://github.com/Klerith/react-intro-javascript