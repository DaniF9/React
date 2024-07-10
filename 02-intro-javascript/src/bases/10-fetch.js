// FETCH API

//https://developer.mozilla.org/es/docs/Web/API/Fetch_API
//https://developers.giphy.com/

const api_key = '2xZQU0TNhfs4G5jWnE11rSR8WrUkPgFx';

// Comos funciona 

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
// Las promesas pueden encadenarse

peticion   // Esto se conoce como promesas en cadena
    .then(resp => resp.json())
    .then(({data}) =>{
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img); // Aqui ponemos la imagen en el html
        //console.log(data.images.original.url)
    })
    
    //console.log(resp)
    // resp.json().then(data =>{
    //     console.log(data)
    // })

.catch(console.warn);