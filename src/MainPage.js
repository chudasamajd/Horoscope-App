import React, { useState } from "react";
import DropDownItem from "./DropDownItem";
import Data from "./ZodiacSignList";
import { motion } from "framer-motion";
import Capsules from "./Capsules";
import PopupBox from "./PopupBox";

const MainPage = () => {
  const [isHover, toggleHover] = useState(false);
  const [curSign, setCurSign] = useState("");

  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  const container = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: 0.1,
      },
      transitionEnd: {
        display: "none",
      },
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.9,
        staggerChildren: 0.3,
      },
      display: "block",
    },
  };

  const listitem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const selectedSign = (sign) => {
    setCurSign(sign);
  };

  return (
    <>
      <div className="container">
        <div className="msgs">
          <div className="msg-1">
            Uncover the secrets
            <br /> of your life
          </div>

          <div className="msg-2">
            With our 100% free and personalized astrology platform. We provide
            Astrological guides for living your best life. Learn the secrets the
            Universe mapped out for you.
          </div>
        </div>

        <div className="element">
          <motion.div
            className="drop-down-menu"
            onHoverStart={toggleHoverMenu}
            onHoverEnd={toggleHoverMenu}
          >
            <span className="default-msg">Select your zodiac sign</span>
            <span className="down-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                class="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </span>

            <motion.div
              variants={container}
              initial="hidden"
              animate={isHover ? "show" : "hidden"}
              className="drop-down-list"
            >
              {Data.map((cval, ind) => {
                return (
                  <motion.div variants={listitem} key={ind} className="items">
                    <DropDownItem data={cval} onClick={selectedSign} />
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Capsules />
      {curSign !== "" ? <PopupBox sign={curSign} /> : null}
    </>
  );
};

export default MainPage;
