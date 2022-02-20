import React, { useState } from "react";
import Tweets from "./components/Tweets";
import TwitterForm from "./components/TwitterForm";
import { TweetsProvider } from "./Context";
//Style
import classes from "./Styles/app.module.css";

const App = () => {
  return (
    <TweetsProvider>
      <div className={classes.app}>
        <Tweets />
        <TwitterForm />
      </div>
    </TweetsProvider>
  );
};

export default App;
