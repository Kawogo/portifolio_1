import React from "react";
import { motion } from "framer-motion";
import Github from "../../assets/github.svg";


const serviceCardAnimate = {
  offScreen: { scale: 0 },
  onScreen: { scale: 1, transition: { duration: 0.9 } },
};

const WebDevelopment = ({ jobs }) => {
  return (
    <>
      {jobs.map((job) => {
        return (
          <motion.div
            key={job.id}
            initial={"offScreen"}
            whileInView={"onScreen"}
            viewport={{ once: false, amount: 0.1 }}
            variants={serviceCardAnimate}
            className="flex flex-col md:flex-row items-center gap-5 p-6 rounded-md shadow-lg"
          >
            <img src={job.img} alt="" srcset="" className="w-72 h-48" />
            <div className="flex flex-col space-y-5">
              <h1 className="font-bold text-purple-500 font-para text-md">
                {job.title}
              </h1>
              <div className="hidden md:flex md:flex-col md:gap-1 font-para font-bold text-sm">
                {job.description}
              </div>
              <motion.a
                href="#my-contacts"
                className="flex gap-2 items-center border border-slate-900 px-2 py-1 w-fit"
              >
                <span className="font-semibold text-purple-500 uppercase text-sm">
                  Github
                </span>
                <img src={Github} className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default WebDevelopment;
