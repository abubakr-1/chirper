import React, { useContext, useRef } from "react";
import { TweetsContext } from "../Context";
//Style
import classes from "../Styles/twitterform.module.css";

const TwitterForm = () => {
  const { tweet } = useContext(TweetsContext);

  const textRef = useRef();
  const emailRef = useRef();

  const handleTweet = (e) => {
    e.preventDefault();
    tweet(emailRef.current.value, textRef.current.value);
    textRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <form className={classes.form}>
      <div className={classes.inputs}>
        <input type="text" placeholder="your chirp" ref={textRef} />
        <input placeholder="your name" ref={emailRef} />
      </div>
      <button onClick={handleTweet}>chirp</button>
    </form>
  );
};

export default TwitterForm;
