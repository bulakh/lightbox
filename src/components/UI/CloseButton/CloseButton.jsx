import React from "react";
import styles from './CloseButton.module.scss'

function CloseButton() {

  return (
    <button className={styles.cross} data-name='close' />
  )
}

export default CloseButton;
