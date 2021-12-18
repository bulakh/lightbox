import React from "react";
import styles from './LikeButton.module.scss'
import cn from "classnames";

function LikeButton({like, setLike}) {

  const likeHandler = () => {
    setLike(prev => !prev);
  }

  return (
    <button
      className={cn(styles.like, like ? styles.likeOn : styles.likeOff)}
      onClick={likeHandler}
    >
     </button>
  )
}

export default LikeButton;
