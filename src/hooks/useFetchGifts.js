import { useEffect, useState } from "react";
import { getGift } from "../helpers/getGifts";

export const useFetchGifts = ( categoria ) => {

    const [imagen, setImagen] = useState([]);
    const [isLoading, setisLoading] = useState(true)

    const getImages = async () => {
       const newImages = await getGift( categoria);
       setImagen(newImages);
       setisLoading(false);
     }

     useEffect( () => {
       getImages(); 

     }, []) 


    return {
        imagen: imagen,
        isLoading: isLoading

    }
}
