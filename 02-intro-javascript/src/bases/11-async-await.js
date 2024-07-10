/*
const getImagenPromesa = () =>{
    return new Promise(resolve => resolve('https://dasfsdjkdasda.com'))}

getImagenPromesa().then(console.log);
*/

/*
const getImagen = async() => {
    return 'https://dajskdas.com';
}

getImagen().then(console.log)

//console.log(getImagen());


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const api_key = '2xZQU0TNhfs4G5jWnE11rSR8WrUkPgFx';


const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);


peticion   
    .then(resp => resp.json())
    .then(({data}) =>{
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img); 
        
    })
.catch(console.warn);
*/

const getImagen = async() => {
    try {
        const api_key = '2xZQU0TNhfs4G5jWnE11rSR8WrUkPgFx';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
        const {data} = await resp.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        // Manejo del error

        console.error(error);
    }
 
    
}

getImagen();