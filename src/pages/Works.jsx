import React from "react";
import PageTitle from "../components/PageTitle";
import WorkOne from "../assets/work-1.png";
import WorkTwo from "../assets/work-2.png";
import WorkThree from "../assets/work-3.png";
import WorkFour from "../assets/work-4.png";
import { motion } from "framer-motion";

const serviceCardAnimate = {
  offScreen: { scale: 0 },
  onScreen: { scale: 1, transition: { duration: 0.9 } },
};

const Works = () => {
  return (
    <div className="section-container py-5 md:py-10" id="my-works">
      <PageTitle title="my works" />
      <div className="grid md:grid-cols-2 gap-5 mt-10">
        <motion.div
          initial={"offScreen"}
          whileInView={"onScreen"}
          viewport={{ once: false, amount: 0.1 }}
          variants={serviceCardAnimate}
          className="flex flex-col gap-5 bg-white p-3 rounded-md shadow-lg py-10 h-full"
        >
          <img src={WorkOne} alt="" srcset="" />
        </motion.div>
        <motion.div
          initial={"offScreen"}
          whileInView={"onScreen"}
          viewport={{ once: false, amount: 0.1 }}
          variants={serviceCardAnimate}
          className="flex flex-col gap-5 bg-white p-3 rounded-md shadow-lg py-10 h-full"
        >
          <img src={WorkTwo} alt="" srcset="" />
        </motion.div>
        <motion.div
          initial={"offScreen"}
          whileInView={"onScreen"}
          viewport={{ once: false, amount: 0.1 }}
          variants={serviceCardAnimate}
          className="flex flex-col gap-5 bg-white p-3 rounded-md shadow-lg py-10 h-full"
        >
          <img src={WorkThree} alt="" srcset="" />
        </motion.div>
        <motion.div
          initial={"offScreen"}
          whileInView={"onScreen"}
          viewport={{ once: false, amount: 0.1 }}
          variants={serviceCardAnimate}
          className="flex flex-col gap-5 bg-white p-3 rounded-md shadow-lg py-10 h-full"
        >
          <img src={WorkOne} alt="" srcset="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Works;
