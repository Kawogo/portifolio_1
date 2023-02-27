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
      <div className="flex flex-col items-center md:items-start order-2 md:order-1 mt-10 md:mt-10">
        <a
          href="#my-contacts"
          id=""
          className="flex items-center border-2 border-purple-500 rounded-t-xl rounded-b-xl w-6 h-8 cursor-pointer animate-bounce"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
            />
          </svg>
        </a>
        <p className="font-main text-sm capitalize flex mt-3">let's talk</p>
      </div>
    </div>
  );
};

export default Works;
