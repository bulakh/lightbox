import React from "react";
import ImageItem from "../ImageItem/ImageItem";
import styles from './ImageList.module.scss'

function ImageList({
  allImages,
  setImage,
  setPopup
}) {

  const clickHandler = (e) => {
    setPopup(true);

    allImages.map(img => (
      img.id === e.target.dataset.id && setImage(img)
    ))
  }

  return (
    <>
      {allImages.length !== 0
      && <ul className={styles.imageList}>
        {allImages.map(dataImage => (
          <ImageItem
            key={dataImage.id}
            clickHandler={clickHandler}
            dataImage={dataImage}
          />
        ))}
      </ul>}
    </>
  )
}

export default ImageList;
