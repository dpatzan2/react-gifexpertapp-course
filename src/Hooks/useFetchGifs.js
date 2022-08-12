import { useEffect, useState } from "react";
import { getGifs } from "../Helpers/GetGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
    };

    useEffect(() => {
      //getGifs(category).then((gifs) => setImages(gifs));
      getImages();
    }, []);

    return {
        images,
        isLoading,
    }
}
