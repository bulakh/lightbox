import React from "react";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";
import TextArea from "../UI/TextArea/TextArea";
import styles from './Form.module.scss'

function Form({comment, comments, setComment, setComments}) {

  const changeHandler = (e) => {
    setComment({...comment, text: e.target.value});
  }

  const userKeyPressHandler = (e) => {
    if (e.key === "Enter" && !e.shiftKey && comment.text.trim().length > 0) {
      e.preventDefault();
      leaveCommentHandler(e);
    }
  };

  const leaveCommentHandler = (e) => {
    e.preventDefault();

    setComment({...comment, id: comment.id++});
    setComments([...comments, comment]);
    setComment({...comment, text: ''});
  }

  return (
    <form onSubmit={leaveCommentHandler} >

      <TextArea
        changeHandler={changeHandler}
        userKeyPressHandler={userKeyPressHandler}
        comment={comment}
        placeholder={'Leave your comment...'}
      />

      <PrimaryButton
        type={'sumbit'}
        comment={comment}
      >
          Send
      </PrimaryButton>
    </form>
  )
}

export default Form;
