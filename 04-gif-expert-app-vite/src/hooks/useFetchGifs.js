
import {useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
export const useFetchGifs = (category) => {

    //const gifs = [1,2,3,4,5]
    //const [counter,setCounter]= useState(10);

     const [images,setImages] = useState([]);
     const [isLoading,setIsLoading] = useState(true);

     const getImages = async() =>{
         const newImages = await getGifs (category);
         setImages(newImages);
         setIsLoading(false);
     }
     useEffect(() =>{
         getImages();
     },[])
  return {
    images,
    isLoading
  }
}


