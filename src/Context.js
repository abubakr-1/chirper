import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const TweetsContext = createContext();

export const TweetsProvider = ({ children }) => {
  const [tweets, setTweets] = useState(null);

  useEffect(() => {
    axios
      .get("/tweets?_sort=id&_order=desc")
      .then((res) => {
        setTweets(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const tweet = (user, text) => {
    axios
      .post("/tweets?_sort=id&_order=desc", {
        username: user,
        text: text,
      })
      .then((res) => {
        setTweets([res.data, ...tweets]);
        toast.success("Chirp Posted", {
          hideProgressBar: true,
          autoClose: 1000,
          pauseOnHover: false,
        });
      });
  };

  //deletes a tweet
  const deleteTweet = (id) => {
    axios.delete(`/tweets/${id}`);
    setTweets(tweets.filter((item) => item.id !== id));
  };

  const [tweetEdit, setTweetEdit] = useState({
    item: {},
    edit: false,
  });

  //edit a tweet
  const editTweet = (item) => {
    setTweetEdit({
      item: item,
      edit: true,
    });
  };

  //update tweet
  const updateTweet = (id, updItem) => {
    axios.put(`/tweets/${id}`, { updItem }).then((res) => {
      updItem = res.data;
      toast.success("Chirp Updated", {
        hideProgressBar: true,
        autoClose: 1000,
        pauseOnHover: false,
      });
    });
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, ...updItem } : tweet
      )
    );
  };

  return (
    <>
      {tweets && (
        <TweetsContext.Provider
          value={{
            tweets,
            tweet,
            deleteTweet,
            editTweet,
            tweetEdit,
            updateTweet,
          }}
        >
          {children}
        </TweetsContext.Provider>
      )}
    </>
  );
};
