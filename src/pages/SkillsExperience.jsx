import React from "react";
import PageTitle from "../components/PageTitle";
import Profile from "../assets/images/profile.jpg";
import { motion } from "framer-motion";
import Resume from "../assets/David_Mathew Kawogo-Resume.pdf";
import Github from "../assets/github.svg";
import Mysql from "../assets/mysql.svg";
import Yii2 from "../assets/Yii2.png";


const leftAnimate = {
  offScreen: { x: -100, opacity: 0 },
  onScreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const skillIconAnimate = {
  offScreen: { opacity: 0 },
  onScreen: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

const SkillsExperience = () => {
  return (
    <div className="section-container py-10 md:py-10" id="my-experience">
      <PageTitle title="skills & experience" />
      <div className="mt-0 flex flex-col md:flex-row md:items-center md:py-32">
        <div className="px-12 md:px-32 flex flex-col gap-2 items-center">
          <motion.img
            initial={"offScreen"}
            whileInView={"onScreen"}
            variants={leftAnimate}
            viewport={{ once: false, amount: 0.1 }}
            src={Profile}
            alt=""
            srcset=""
            className="hidden md:block h-32 w-32 md:h-52 md:w-52 md:mx-32 rounded-full border-2 border-purple-500"
          />
          <div className="grid grid-cols-2 gap-5 mt-10 md:mt-0 items-center">
            <motion.div
              initial={"offScreen"}
              whileInView={"onScreen"}
              viewport={{ once: false, amount: 1 }}
              variants={skillIconAnimate}
              className="flex items-center gap-2 bg-white shadow-lg rounded-lg p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-5 w-5"
              >
                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
              </svg>
              <span className="text-sm font-para font-bold">Javascript</span>
            </motion.div>
            <motion.div
              initial={"offScreen"}
              whileInView={"onScreen"}
              viewport={{ once: false, amount: 1 }}
              variants={skillIconAnimate}
              className="flex items-center gap-2 bg-white shadow-lg rounded-lg p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-5 w-5"
              >
                <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
              </svg>
              <span className="text-sm font-para font-bold">React Js</span> 
            </motion.div>
            <motion.div
              initial={"offScreen"}
              whileInView={"onScreen"}
              viewport={{ once: false, amount: 1 }}
              variants={skillIconAnimate}
              className="flex items-center gap-2 bg-white shadow-lg rounded-lg p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="h-5 w-5"
              >
                <path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z" />
              </svg>
              <span className="text-sm font-para font-bold">PHP</span>
            </motion.div>
            <motion.div
              initial={"offScreen"}
              whileInView={"onScreen"}
              viewport={{ once: false, amount: 1 }}
              variants={skillIconAnimate}
              className="flex items-center gap-2 bg-white shadow-lg rounded-lg p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-5 w-5"
              >
                <path d="M504.4,115.83a5.72,5.72,0,0,0-.28-.68,8.52,8.52,0,0,0-.53-1.25,6,6,0,0,0-.54-.71,9.36,9.36,0,0,0-.72-.94c-.23-.22-.52-.4-.77-.6a8.84,8.84,0,0,0-.9-.68L404.4,55.55a8,8,0,0,0-8,0L300.12,111h0a8.07,8.07,0,0,0-.88.69,7.68,7.68,0,0,0-.78.6,8.23,8.23,0,0,0-.72.93c-.17.24-.39.45-.54.71a9.7,9.7,0,0,0-.52,1.25c-.08.23-.21.44-.28.68a8.08,8.08,0,0,0-.28,2.08V223.18l-80.22,46.19V63.44a7.8,7.8,0,0,0-.28-2.09c-.06-.24-.2-.45-.28-.68a8.35,8.35,0,0,0-.52-1.24c-.14-.26-.37-.47-.54-.72a9.36,9.36,0,0,0-.72-.94,9.46,9.46,0,0,0-.78-.6,9.8,9.8,0,0,0-.88-.68h0L115.61,1.07a8,8,0,0,0-8,0L11.34,56.49h0a6.52,6.52,0,0,0-.88.69,7.81,7.81,0,0,0-.79.6,8.15,8.15,0,0,0-.71.93c-.18.25-.4.46-.55.72a7.88,7.88,0,0,0-.51,1.24,6.46,6.46,0,0,0-.29.67,8.18,8.18,0,0,0-.28,2.1v329.7a8,8,0,0,0,4,6.95l192.5,110.84a8.83,8.83,0,0,0,1.33.54c.21.08.41.2.63.26a7.92,7.92,0,0,0,4.1,0c.2-.05.37-.16.55-.22a8.6,8.6,0,0,0,1.4-.58L404.4,400.09a8,8,0,0,0,4-6.95V287.88l92.24-53.11a8,8,0,0,0,4-7V117.92A8.63,8.63,0,0,0,504.4,115.83ZM111.6,17.28h0l80.19,46.15-80.2,46.18L31.41,63.44Zm88.25,60V278.6l-46.53,26.79-33.69,19.4V123.5l46.53-26.79Zm0,412.78L23.37,388.5V77.32L57.06,96.7l46.52,26.8V338.68a6.94,6.94,0,0,0,.12.9,8,8,0,0,0,.16,1.18h0a5.92,5.92,0,0,0,.38.9,6.38,6.38,0,0,0,.42,1v0a8.54,8.54,0,0,0,.6.78,7.62,7.62,0,0,0,.66.84l0,0c.23.22.52.38.77.58a8.93,8.93,0,0,0,.86.66l0,0,0,0,92.19,52.18Zm8-106.17-80.06-45.32,84.09-48.41,92.26-53.11,80.13,46.13-58.8,33.56Zm184.52,4.57L215.88,490.11V397.8L346.6,323.2l45.77-26.15Zm0-119.13L358.68,250l-46.53-26.79V131.79l33.69,19.4L392.37,178Zm8-105.28-80.2-46.17,80.2-46.16,80.18,46.15Zm8,105.28V178L455,151.19l33.68-19.4v91.39h0Z" />
              </svg>
              <span className="text-sm font-para font-bold">Laravel</span>
            </motion.div>
            <motion.div
              initial={"offScreen"}
              whileInView={"onScreen"}
              viewport={{ once: false, amount: 1 }}
              variants={skillIconAnimate}
              className="flex items-center gap-2 bg-white shadow-lg rounded-lg p-2"
            >
              <img src={Yii2} alt="" srcset="" className="w-5 h-5" />
              <span className="text-sm font-para font-bold">Yii2</span>
            </motion.div>
            <motion.div
              initial={"offScreen"}
              whileInView={"onScreen"}
              viewport={{ once: false, amount: 1 }}
              variants={skillIconAnimate}
              className="flex items-center gap-2 bg-white shadow-lg rounded-lg p-2"
            >
              <img src={Mysql} alt="" srcset="" className="w-5 h-5" />
              <span className="text-sm font-para font-bold">Mysql</span>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-10 md:mt-0 p-5 items-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1.1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <p className="font-para font-bold mb-4 text-sm md:text-md text-center">
              Hello, my name is David from Dar-es-salaam, Tanzania, I am a
              creative full stack web developer with about 4 years of
              experience. My first job is to listen to what you need and put
              you/your business in a position to meet your personal/clients
              requirements in a maximum satisfaction.
            </p>
            <p className="font-para font-bold text-sm md:text-md text-center">
             I have a practical skill for <span className="text-purple-500 font-semibold">Javascript, Typescript</span> and 
             <span className="text-purple-500 font-semibold"> React Js</span> for frontend and <span className="text-purple-500 font-semibold">PHP, Yii2</span> and <span className="text-purple-500 font-semibold">Laravel </span>for the backend. 
             For database i work well with <span className="text-purple-500 font-semibold">Mysql</span> database.
            </p>
          </motion.div>
          <div className="flex gap-3">
            <motion.a
              href="https://github.com/Kawogo"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.1 }}
              className="w-fit mt-5 px-4 py-2 border border-purple-500 rounded-sm uppercase font-main text-sm flex gap-3"
            >
              github
              <img src={Github} className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={Resume}
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.1 }}
              className="w-fit mt-5 px-4 py-2 bg-purple-500 rounded-sm uppercase font-main text-sm text-white flex items-center gap-3"
            >
               get my cv
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsExperience;
