import React, { useState } from "react";
import CommentList from "../CommentList/CommentList";
import Form from "../Form/Form";
import styles from './Popup.module.scss'
import Lightbox from '../Lightbox/Lightbox'
import LikeButton from "../UI/LikeButton/LikeButton";
import CloseButton from "../UI/CloseButton/CloseButton";
import { useClosePopup } from "../../hooks/useClosePopup";

function Popup({
  image,
  setImage,
  popup,
  setPopup,
  allImages,
}) {

  const [like, setLike] = useState(false);

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState({id: 0, text: ''});

  const setDefaultState = () => {
    setComments([]);
    setComment({...comment, text: ''});
    setLike(false);
  }

  const closeLightboxHandler = (e) => {
    if (e.target.dataset.name === 'close') {
      setPopup(false);
      setDefaultState();
    }
  }

  useClosePopup(setPopup, setDefaultState);

  return (
    <>
      {popup &&
      <section
        onClick={closeLightboxHandler}
        className={styles.popup}
        data-name='close'
      >
        <h2 className='visually-hidden'>Lightbox</h2>

        <CloseButton position={styles.close} />

        <div className={styles.wrap}>
          <Lightbox
            image={image}
            allImages={allImages}
            setImage={setImage}
            setDefaultState={setDefaultState}
          />

          <div className={styles.wrapUi}>
            <LikeButton like={like}  setLike={setLike}/>

            <div>
              <CommentList comments={comments}/>

              <Form
                comment={comment}
                comments={comments}
                setComment={setComment}
                setComments={setComments}
              />
            </div>
          </div>
        </div>
      </section>}
    </>
  )
}

export default Popup;
