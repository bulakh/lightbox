import React from "react";
import styles from './CommentItem.module.scss'

function CommentItem({comment}) {
  return (
    <li>
      <div style={{background: 'lightgrey', width: '49px', height: '49px', borderRadius: '50%'}}></div>
      <h4>Oleg</h4>
      <span>{comment.text}</span>
    </li>
  )
}

export default CommentItem;
