import React from "react";
import styles from './ArrowButton.module.scss'
import cn from "classnames";

function ArrowButton({navImage, name, getDisabled}) {
  if (name === 'prev') {
    return (
      <button
        className={cn(styles.arrow, styles.prev)}
        onClick={navImage}
        data-name={name}
        disabled={getDisabled}
      >
      </button>
    )
  } else {
    return (
      <button
        className={cn(styles.arrow, styles.next)}
        onClick={navImage}
        data-name={name}
        disabled={getDisabled}
      >
      </button>
    )
  }
}

export default ArrowButton;
