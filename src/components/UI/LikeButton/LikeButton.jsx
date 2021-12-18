import React from "react";
import styles from './LikeButton.module.scss'

function LikeButton({like, setLike}) {

  const likeHandler = () => {
    setLike(prev => !prev);
  }

  return (
    <button onClick={likeHandler}>{like ? 'Liked' : 'Like'}</button>
  )
}

export default LikeButton;
