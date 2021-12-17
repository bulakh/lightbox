import React, { useState } from 'react';
import './index.css';

function App() {
  const dataImages = ['green', 'black', 'yellow', 'grey', 'blue', 'tomato', 'plum', 'orange', 'purple', 'wheat'];
  const initialComments = [];

  const [image, setImage] = useState(dataImages[0]);
  const [popup, setPopup] = useState(false);

  const [comments, setComments] = useState(initialComments);
  const [comment, setComment] = useState({id: 0, text: ''});

  const [like, setLike] = useState(false);

  const setDefaultState = () => {
    setComments(initialComments);
    setComment({...comment, text: ''});
    setLike(false);
  }

  const openLightboxHandler = (e) => {
    setImage(e.target.dataset.name);
    setPopup(true);
  }

  const closeLightboxHandler = () => {
    setPopup(false);
    setDefaultState();
  }

  const changeHandler = (e) => {
    setComment({...comment, text: e.target.value});
  }

  const leaveCommentHandler = (e) => {
    e.preventDefault();

    setComment({...comment, id: comment.id++});
    setComments([...comments, comment]);
    setComment({...comment, text: ''});
  }

  const userKeyPressHandler = (e) => {
    if (e.key === "Enter" && !e.shiftKey && comment.text.trim().length > 0) {
      e.preventDefault();
      leaveCommentHandler(e);
    }
  };

  const likeHandler = () => {
    setLike(prev => !prev);
  }

  const navImage = (e) => {
    const currentIndexImage = dataImages.indexOf(image);

    e.target.dataset.name === 'prev' && currentIndexImage !== 0 && setImage(dataImages[currentIndexImage - 1]);
    e.target.dataset.name === 'next' && currentIndexImage !== dataImages.length - 1  && setImage(dataImages[currentIndexImage + 1]);

    setDefaultState();
  }


  return (
    <>
      <h1>Images</h1>
      <ul style={{listStyle: 'none', padding: '0', display: 'flex', gap: '19px', flexWrap: 'wrap'}}>
        {dataImages.map(color => (
          <li
            onClick={openLightboxHandler}
            key={color}
            style={{height: '137px', width: '137px', background: color, borderRadius: '5px'}}
            data-name={color}
          >

          </li>
        ))}
      </ul>
      {console.log}
      {popup && <section style={{position: 'absolute', top: '0', width: '100%', minHeight: '100%', background: 'rgba(0, 0, 0, 0.36)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <h2 style={{display: 'none'}}>Lightbox</h2>
        <div style={{background: '#DAFFED', marginTop: '65px', width: '70vw', minHeight: '92vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px' }}>
          <div style={{width: '90%', minHeight: '515px', background: image}}></div>
          <div>
            <button onClick={likeHandler}>{like ? 'Liked' : 'Like'}</button>
            <button onClick={closeLightboxHandler}>Close</button>
            <br />
            <button
              onClick={navImage}
              data-name='prev'
              disabled={dataImages.indexOf(image) === 0 ? 'disabled' : false}
            >
              Prev
            </button>
            <button
              onClick={navImage}
              data-name='next'
              disabled={dataImages.indexOf(image) === dataImages.length - 1 ? 'disabled' : false}
            >
              Next
            </button>

            {/* {comments.length !== 0 &&
              <div>
                <h3>Comments</h3>
                <ul style={{listStyle: 'none'}}>
                  {comments.map(comment => (
                    <li key={comment.id}>
                      <div style={{background: 'lightgrey', width: '49px', height: '49px', borderRadius: '50%'}}></div>
                      <h4>Oleg</h4>
                      <span>{comment.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            } */}
            <form onSubmit={leaveCommentHandler} >
              <textarea onChange={changeHandler} onKeyPress={userKeyPressHandler} value={comment.text} style={{width: '500px', height: '130px'}} placeholder='Leave your comment...' />
              <button type='submit' disabled={comment.text ? false : 'disabled'}>Send</button>
            </form>
          </div>
        </div>
      </section>}
    </>
  );
}

export default App;
