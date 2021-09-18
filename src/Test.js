import React, { useState } from "react";
import DropDownItem from "./DropDownItem";
import Data from "./ZodiacSignList";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const Test = () => {
  const { sign } = useParams();
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ y: -1000 }}
      >
        <div className="menu">
          <Link to="/">HOME</Link>
          <Link to="/test/work">TEST</Link>
        </div>
        hello {sign}
      </motion.div>
    </>
  );
};

export default Test;
