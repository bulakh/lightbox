import React, { useState } from 'react';
import './index.scss';
import ImageList from './components/ImageList/ImageList';
import Popup from './components/Popup/Popup';
import Spiner from './components/Spiner/Spiner';
import { URL_IMAGES } from './const';
import { useGetImages } from './hooks/useGetImages';



function App() {

  const [isLoaded, setIsLoaded] = useState(false);

  const [allImages, setAllImages] = useState([]);
  const [image, setImage] = useState(allImages[0]);

  const [popup, setPopup] = useState(false);

  useGetImages(URL_IMAGES, setIsLoaded, setAllImages);

  if (!isLoaded) {
    return <Spiner />
  }

  return (
    <>
      <h1 className='header'>Images:</h1>

      <ImageList
        allImages={allImages}
        setImage={setImage}
        setPopup={setPopup}
      />

      <Popup
        image={image}
        setImage={setImage}
        popup={popup}
        setPopup={setPopup}
        allImages={allImages}
      />
    </>
  );
}

export default App;
