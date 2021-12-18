import { useEffect } from "react";


export const useGetImages = (url, setIsLoaded, setImages) => {
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setImages(result)
        },
        (error) => {
          setIsLoaded(true);
          alert('Ошибка:', error);
        }
      )
  },  [url, setIsLoaded, setImages])

}
