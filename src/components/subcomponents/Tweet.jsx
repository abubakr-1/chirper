import React, { useContext, useState } from "react";
//Style
import classes from "../../Styles/tweet.module.css";
//framer-motion
import { AnimatePresence, motion } from "framer-motion";
//animation
import { showIcon } from "../../animations/animations";
import { TweetsContext } from "../../Context";
//copy-to-clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
//toatify
import { toast } from "react-toastify";
import UpdateModal from "../Modal/UpdateModal";

const Tweet = ({ tweet }) => {
  const { deleteTweet, editTweet } = useContext(TweetsContext);

  const [over, setOver] = useState(false);

  const [open, setOpen] = useState(false);

  const notClose = () => setOpen(true);
  const close = () => setOpen(false);

  const handleMouseOut = () => {
    setOver(false);
  };
  const copyAlert = () =>
    toast.info("Copied to Clipoard", {
      hideProgressBar: true,
      autoClose: 1000,
      pauseOnHover: false,
    });
  return (
    <>
      <motion.div
        className={classes.tweet}
        onMouseLeave={handleMouseOut}
        whileHover={() => setOver(true)}
      >
        <div className={classes.texts}>
          <address>@{tweet.username}</address>
          <p>{tweet.text}</p>
        </div>
        <motion.div
          className={classes.iconDiv}
          variants={showIcon}
          initial="hidden"
          animate={over ? "show" : "hidden"}
        >
          <motion.i
            variants={showIcon}
            className={`${classes.icons} bi bi-x-circle-fill`}
            onClick={() => deleteTweet(tweet.id)}
          ></motion.i>
          <CopyToClipboard text={tweet.text}>
            <motion.i
              onClick={copyAlert}
              variants={showIcon}
              className={`${classes.icons} bi bi-clipboard`}
            ></motion.i>
          </CopyToClipboard>
          <motion.i
            variants={showIcon}
            className={`${classes.icons} bi bi-pen`}
            onClick={() => {
              notClose();
              editTweet(tweet);
            }}
          ></motion.i>
        </motion.div>
      </motion.div>

      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => null}
      >
        {open ? <UpdateModal handleClose={close} item={tweet} /> : null}
      </AnimatePresence>
    </>
  );
};

export default Tweet;
