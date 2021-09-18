import React from "react";
import { motion } from "framer-motion";
import HoroscopeCard from "./HoroscopeCard";

const PopupBox = (props) => {
  const mainBoxVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const boxVariants = {
    hidden: {
      y: "100vh",
    },
    show: {
      y: 0,
      transition: {
        ease: "easeIn",
        duration: 0.5,
      },
    },
  };
  return (
    <>
      <motion.div
        className="model-box"
        variants={mainBoxVariants}
        animate="show"
        initial="hidden"
      >
        <HoroscopeCard sign={props.sign} />
        <motion.div
          className="left-model-box"
          variants={boxVariants}
        ></motion.div>
        <motion.div
          className="center-model-box"
          variants={boxVariants}
        ></motion.div>
        <motion.div
          className="right-model-box"
          variants={boxVariants}
        ></motion.div>
      </motion.div>
    </>
  );
};

export default PopupBox;
