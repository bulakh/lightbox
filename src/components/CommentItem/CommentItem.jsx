import React from "react";
import styles from './CommentItem.module.scss'

function CommentItem({comment}) {
  return (
    <li className={styles.wrapItem}>
      <div className={styles.avatar}></div>
      <div>
        <h4>Oleg</h4>
        <span>{comment.text}</span>
      </div>
    </li>
  )
}

export default CommentItem;
