import React from "react";
import Profile from "../assets/images/profile.jpg";
import Twitter from "../assets/twitter.svg";
import Linkedin from "../assets/linkedin.svg";
import Instagram from "../assets/instagram.svg";
import "../autotyping";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

const Home = () => {
  return (
    <div
      className="section-container py-12 md:py-32 bg-gray-50 h-screen"
      id="home"
    >
      <div className="flex flex-col items-center md:justify-between md:flex-row">
        <motion.div
          initial={"offScreen"}
          whileInView={"onScreen"}
          variants={textAnimate}
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-col items-center md:items-start order-2 md:order-1 mt-5"
        >
          <h4 className="text-sm text-semibold font-main">
            Hello, am David...
          </h4>
          <h1 className="text-4xl md:text-2xl font-main font-bold" id="">
            Web Developer
          </h1>
        </motion.div>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: false, amount: 0.1 }}
          src={Profile}
          alt=""
          srcset=""
          className="h-40 w-40 md:h-72 md:w-72 rounded-full border-2 border-purple-500 order-1 mt-10 md:mt-0"
        />
        <div className="flex gap-3 md:flex-col order-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition = {{duration: 0.8}}
            viewport={{ once: false, amount: 0.1 }}
            className="mt-5 px-2 py-2 bg-purple-500 border rounded-sm text-white uppercase font-main text-sm"
          >
            Download CV
          </motion.button>{" "}
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileInView={{ scale: 0.9 }}
            viewport={{ once: false, amount: 0.1 }}
            href="#my-contacts"
            className="mt-5 px-4 py-2 border border-purple-500 rounded-sm uppercase font-main text-sm"
          >
            let's work
          </motion.a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:justify-between items-center md:mt-32 mt-10">
        <div className="flex flex-col items-center md:items-start order-2 md:order-1 mt-10 md:mt-0">
          <a
            href="#my-experience"
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
          <p className="font-main text-sm capitalize flex mt-3">
            check my experience
          </p>
        </div>
        <div className="flex gap-1 order-1 md:order-2 md:animate-bounce">
          <img
            src={Twitter}
            alt=""
            srcset=""
            className="h-7 w-7 cursor-pointer"
          />
          <img
            src={Instagram}
            alt=""
            srcset=""
            className="h-7 w-7 cursor-pointer"
          />
          <img
            src={Linkedin}
            alt=""
            srcset=""
            className="h-7 w-7 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;