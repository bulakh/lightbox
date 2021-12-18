import React from "react";
import { useGetHalfImage } from "../../hooks/useGetHalfImage";
import { getDisabledFirst, getDisabledLast } from "../../utils";
import ArrowButton from "../UI/ArrowButton/ArrowButton";
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
      <div className={styles.lightbox}>
        <img style={{height: '100%'}} src={useGetHalfImage(image.download_url)} alt={image.author} />
      </div>
      <div className={styles.wrap}>
        <ArrowButton navImage={navImage} name={'prev'} getDisabled={getDisabledFirst(allImages, image)}/>
        <ArrowButton navImage={navImage} name={'next'} getDisabled={getDisabledLast(allImages, image)} />
      </div>

    </>
  )
}

export default Lightbox;
