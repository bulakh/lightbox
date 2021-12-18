import React from "react";
import styles from './TextArea.module.scss'

function TextArea({changeHandler, userKeyPressHandler, comment, placeholder}) {
  return (
    <textarea
      className={styles.area}
      onChange={changeHandler}
      onKeyPress={userKeyPressHandler}
      value={comment.text}
      placeholder={placeholder}
    />
  )
}

export default TextArea;
