import React from "react";
import styles from './PrimaryButton.module.scss'

function PrimaryButton({type, comment, children}) {
  return (
    <button
      className={styles.button}
      type={type}
      disabled={comment.text ? false : 'disabled'}
    >
      {children}
    </button>
  )
}

export default PrimaryButton;
