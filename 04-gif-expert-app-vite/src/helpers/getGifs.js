
export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=7lCpuJLWYFhtUUtfKz3A70xy8EWsc3hG&q=${category}&limit=10`;
    const resp = await fetch(url); // Esta es la respues del https
    const {data} = await resp.json(); // traemos la repsuesta de la peticion

    const gifs = data.map(img => ({  //Aqui en esta parte lo que hacemos es extraer la info que nos trae en los gifs de la API

        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }));

    return gifs;
}