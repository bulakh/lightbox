import React from "react";
import { useGetHalfImage } from "../../hooks/useGetHalfImage";
import styles from './ImageItem.module.scss'

function ImageItem({clickHandler, dataImage}) {
  return (
    <li
      onClick={clickHandler}
      className={styles.imageItem}
    >
      <img src={useGetHalfImage(dataImage.download_url)} alt={dataImage.author} data-id={dataImage.id}/>
    </li>
  )
}

export default ImageItem;
