import { motion } from "framer-motion";
import React from "react";

const textAnimate = {
  offScreen: { x: -100, opacity: 0 },
  onScreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const PageTitle = ({ title }) => {
  return (
    <div className="px-7">
      <div className="md:w-3 w-1 px-5 md:px-10 h-1 bg-purple-500 mb-1 rounded-md"></div>
      <motion.h1
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{ once: false, amount: 0.1 }}
        variants={textAnimate}
        className="font-main text-md md:text-2xl capitalize"
      >
        {title}
      </motion.h1>
    </div>
  );
};

export default PageTitle;
