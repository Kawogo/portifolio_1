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
    <div
      className="section-container py-5 md:py-10 bg-gray-50"
      id="my-services"
    >
      <PageTitle title="what i can accomplish" />
      <div className="grid md:grid-cols-3 md:justify-between md:items-center gap-5 mt-10 md:px-32 px-10">
        <motion.div
          initial={"offScreen"}
          whileInView={"onScreen"}
          viewport={{ once: false, amount: 0.1 }}
          variants={serviceCardAnimate}
          className="flex flex-col items-center gap-5 bg-white p-3 w-72 rounded-md shadow-lg py-10"
        >
          <div>
            <img src={WebDevelopmentSvg} alt="" srcset="" className="w-20" />
          </div>
          <div className="flex flex-col items-center space-y-5">
            <h3 className="font-semibold text-sm bg-gray-50 shadow-xl p-2 rounded-md border border-purple-400">
              Web Development
            </h3>
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
            </div>
            <p className="font-para text-center text-xs font-semibold mt-3">
              With number of experience, i can analyse, design and develop any
              web based application and deliver the quality of you expectations.
            </p>
            <motion.a
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.1 }}
              href="#my-contacts"
              className="mt-5 px-4 py-2 border bg-purple-500 rounded-sm capitalize font-main text-sm text-white"
            >
              let's work
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={"offScreen"}
          whileInView={"onScreen"}
          viewport={{ once: false, amount: 0.1 }}
          variants={serviceCardAnimate}
          className="flex flex-col items-center gap-5 bg-white p-3 w-72 rounded-md shadow-lg py-10"
        >
          <div>
            <img src={WebDevelopmentSvg} alt="" srcset="" className="w-20" />
          </div>
          <div className="flex flex-col items-center space-y-5">
            <h3 className="font-semibold text-sm bg-gray-50 shadow-xl p-2 rounded-md border border-purple-400">
              Web Development
            </h3>
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
            </div>
            <p className="font-para text-center text-xs font-semibold mt-3">
              With number of experience, i can analyse, design and develop any
              web based application and deliver the quality of you expectations.
            </p>
            <motion.a
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.1 }}
              href="#my-contacts"
              className="mt-5 px-4 py-2 border bg-purple-500 rounded-sm capitalize font-main text-sm text-white"
            >
              let's work
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={"offScreen"}
          whileInView={"onScreen"}
          viewport={{ once: false, amount: 0.1 }}
          variants={serviceCardAnimate}
          className="flex flex-col items-center gap-5 bg-white p-3 w-72 rounded-md shadow-lg py-10"
        >
          <div>
            <img src={WebDevelopmentSvg} alt="" srcset="" className="w-20" />
          </div>
          <div className="flex flex-col items-center space-y-5">
            <h3 className="font-semibold text-sm bg-gray-50 shadow-xl p-2 rounded-md border border-purple-400">
              Web Development
            </h3>
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
            </div>
            <p className="font-para text-center text-xs font-semibold mt-3">
              With number of experience, i can analyse, design and develop any
              web based application and deliver the quality of you expectations.
            </p>
            <motion.a
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.1 }}
              href="#my-contacts"
              className="mt-5 px-4 py-2 border bg-purple-500 rounded-sm capitalize font-main text-sm text-white"
            >
              let's work
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
