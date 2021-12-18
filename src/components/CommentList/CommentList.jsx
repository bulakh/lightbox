import React from "react";
import CommentItem from "../CommentItem/CommentItem";
import styles from './CommentList.module.scss'

function CommentList({comments}) {
  return (
    <>
      {comments.length !== 0 &&
        <div className={styles.wrap}>
          <h3>Comments:</h3>
          <ul className={styles.comments}>
            {comments.map(comment => (
              <CommentItem key={comment.id} comment={comment} />
            ))}
          </ul>
        </div>
      }
    </>
  )
}

export default CommentList;
