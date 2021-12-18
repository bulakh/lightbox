import React from "react";
import styles from './ArrowButton.module.scss'
import cn from "classnames";

function ArrowButton({navImage, name, getDisabled}) {
  return (
    <button
      className={
        cn(
          styles.arrow,
          name === 'prev' ? styles.prev : styles.next
        )
      }
      onClick={navImage}
      data-name={name}
      disabled={getDisabled}
    >
    </button>
  )
}

export default ArrowButton;
