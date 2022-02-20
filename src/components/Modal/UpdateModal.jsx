import { motion } from "framer-motion";
import React, { useContext, useEffect, useRef } from "react";
import BackDrop from "../subcomponents/BackDrop";
import "../../Styles/modal.css";
import { modalAnimation } from "../../animations/animations";
import { TweetsContext } from "../../Context";

const UpdateModal = ({ handleClose }) => {
  const { tweetEdit, updateTweet } = useContext(TweetsContext);

  const textRef = useRef();

  useEffect(() => {
    if (tweetEdit.edit) {
      textRef.current.value = tweetEdit.item.text;
    }
  }, [tweetEdit]);

  return (
    <BackDrop onClick={handleClose}>
      <motion.div
        variants={modalAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Edit Your Chirp</h1>
        <input type="text" ref={textRef} />
        <button
          onClick={(e) => {
            e.preventDefault();
            handleClose();
            if (tweetEdit.edit) {
              updateTweet(tweetEdit.item.id, {
                ...tweetEdit.item,
                text: "edited: " + textRef.current.value,
              });
            }
          }}
        >
          Save
        </button>
      </motion.div>
    </BackDrop>
  );
};

export default UpdateModal;
