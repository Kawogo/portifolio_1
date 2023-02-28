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
    </div>
  );
};

export default Services;
