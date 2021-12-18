import React from "react";
import { useGetHalfImage } from "../../hooks/useGetHalfImage";
import styles from './Lightbox.module.scss'

function Lightbox({image, allImages, setImage, setDefaultState}) {

  const navImage = (e) => {
    const currentIndexImage = allImages.indexOf(image);

    e.target.dataset.name === 'prev' && currentIndexImage !== 0 && setImage(allImages[currentIndexImage - 1]);
    e.target.dataset.name === 'next' && currentIndexImage !== allImages.length - 1  && setImage(allImages[currentIndexImage + 1]);

    setDefaultState();
  }

  return (
    <>
      <div style={{width: '90%', height: '515px', backgroundImg: 'lightgrey', overflow: 'hidden'}}>
        <img style={{height: '100%'}} src={useGetHalfImage(image.download_url)} alt={'text!!!!!'} />
      </div>
      <button
        onClick={navImage}
        data-name='prev'
        disabled={allImages.indexOf(image) === 0 ? 'disabled' : false}
      >
        Prev
      </button>
      <button
        onClick={navImage}
        data-name='next'
        disabled={allImages.indexOf(image) === allImages.length - 1 ? 'disabled' : false}
      >
        Next
      </button>
    </>
  )
}

export default Lightbox;
