import React, { useContext } from "react";
import { TweetsContext } from "../Context";
import Tweet from "./subcomponents/Tweet";
//Styles
import classes from "../Styles/tweets.module.css";
//toastContainer
import { ToastContainer } from "react-toastify";

const Tweets = () => {
  const { tweets } = useContext(TweetsContext);

  if (tweets.length === 0) {
    return (
      <div className={classes.tweets}>
        <h2>No Chirps yet</h2>
      </div>
    );
  }
  return (
    <div className={classes.tweets}>
      <ToastContainer />
      {tweets.map((tweet) => (
        <Tweet tweet={tweet} key={tweet.id} />
      ))}
    </div>
  );
};

export default Tweets;
