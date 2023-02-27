import React from "react";
import PageTitle from "../components/PageTitle";
import WebDevelopmentSvg from "../assets/web-development.svg";
import GraphicDesignSvg from "../assets/brush.svg";
import { motion } from "framer-motion";

const serviceCardAnimate = {
  offScreen: { scale: 0 },
  onScreen: { scale: 1, transition: { duration: 0.9 } },
};

const Services = () => {
  return (
    <div className="section-container py-5 md:py-10" id="my-services">
      <PageTitle title="what i can accomplish" />
      <div className="grid md:grid-cols-3 gap-5 mt-10 px-4">
        <motion.div
          initial={"offScreen"}
          whileInView={"onScreen"}
          viewport={{ once: false, amount: 0.1 }}
          variants={serviceCardAnimate}
          className="flex flex-col gap-5 bg-white p-3 rounded-md shadow-lg py-10 hover:bg-purple-200"
        >
          <div>
            <img src={WebDevelopmentSvg} alt="" srcset="" className="w-20" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg">Web Development</h3>
            <div className="flex gap-2 mt-2 flex-wrap">
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                Html
              </p>
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                Css
              </p>
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                Javascript
              </p>
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                React
              </p>
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                PHP
              </p>
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                Laravel
              </p>
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                Laravel
              </p>
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                Laravel
              </p>
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                Laravel
              </p>
            </div>
            <p className="font-para text-xs font-semibold mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <button className="mt-5 px-2 py-2 bg-purple-500 border rounded-sm text-white font-main text-sm w-24 hover:animate-pulse">
              Let's work
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={"offScreen"}
          whileInView={"onScreen"}
          viewport={{ once: false, amount: 0.1 }}
          variants={serviceCardAnimate}
          className="flex flex-col gap-5 bg-white p-3 rounded-md shadow-lg py-10"
        >
          <div>
            <img src={GraphicDesignSvg} alt="" srcset="" className="w-20" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg">Graphics Design</h3>
            <div className="flex gap-2 mt-2 flex-wrap">
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                Photoshop
              </p>
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                Illustrator
              </p>
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                Premier Pro
              </p>
            </div>
            <p className="font-para text-xs font-semibold mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <button className="mt-5 px-2 py-2 bg-purple-500 border rounded-sm text-white font-main text-sm w-24 hover:animate-pulse">
              Let's work
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={"offScreen"}
          whileInView={"onScreen"}
          viewport={{ once: false, amount: 0.1 }}
          variants={serviceCardAnimate}
          className="flex flex-col gap-5 bg-white p-3 rounded-md shadow-lg py-10"
        >
          <div>
            <img src={WebDevelopmentSvg} alt="" srcset="" className="w-20" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg">Web Development</h3>
            <div className="flex gap-2 mt-2 flex-wrap">
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                Html
              </p>
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                Css
              </p>
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                Javascript
              </p>
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                React
              </p>
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                PHP
              </p>
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                Laravel
              </p>
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                Laravel
              </p>
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                Laravel
              </p>
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                Laravel
              </p>
            </div>
            <p className="font-para text-xs font-semibold mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <button className="mt-5 px-2 py-2 bg-purple-500 border rounded-sm text-white font-main text-sm w-24 hover:animate-pulse">
              Let's work
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={"offScreen"}
          whileInView={"onScreen"}
          viewport={{ once: false, amount: 0.1 }}
          variants={serviceCardAnimate}
          className="flex flex-col gap-5 bg-white p-3 rounded-md shadow-lg py-10"
        >
          <div>
            <img src={WebDevelopmentSvg} alt="" srcset="" className="w-20" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg">Web Development</h3>
            <div className="flex gap-2 mt-2 flex-wrap">
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                Html
              </p>
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                Css
              </p>
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                Javascript
              </p>
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                React
              </p>
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                PHP
              </p>
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                Laravel
              </p>
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                Laravel
              </p>
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                Laravel
              </p>
              <p className="underline underline-offset-4 decoration-purple-500 text-sm font-semibold">
                Laravel
              </p>
            </div>
            <p className="font-para text-xs font-semibold mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <button className="mt-5 px-2 py-2 bg-purple-500 border rounded-sm text-white font-main text-sm w-24 hover:animate-pulse">
              Let's work
            </button>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col items-center md:items-start order-2 md:order-1 mt-10 md:mt-10">
        <a
          href="#my-works"
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
        <p className="font-main text-sm capitalize flex mt-3">check my works</p>
      </div>
    </div>
  );
};

export default Services;
