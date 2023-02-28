import React from "react";
import PageTitle from "../components/PageTitle";
import { motion } from "framer-motion";

const textAnimate = {
  offScreen: { x: -100, opacity: 0 },
  onScreen: {
    x: 0,
    opacity: 1,
  },
};

const Contacts = () => {
  return (
    <div className="section-container py-5" id="my-contacts">
      <PageTitle title="let's work" />
      <div className="grid md:grid-cols-3 md:justify-between md:py-20 px-4 mx-0">
        <div className="md:col-span-1 flex flex-col gap-2 mt-10 mb-10">
          <motion.div
            initial={"offScreen"}
            whileInView={"onScreen"}
            variants={textAnimate}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2"
          >
            <div className="flex items-center gap-2 bg-white shadow-lg rounded-lg p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 md:w-6 md:h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
            <h5 className="font-para text-sm font-semibold">
              +255 693 3072 86
            </h5>
          </motion.div>
          <motion.div
            initial={"offScreen"}
            whileInView={"onScreen"}
            variants={textAnimate}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.9 }}
            className="flex items-center gap-2"
          >
            <div className="flex items-center gap-2 bg-white shadow-lg rounded-lg p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 md:w-6 md:h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <h5 className="font-para text-sm font-semibold">
              dkawogo79@gmail.com
            </h5>
          </motion.div>
          <motion.div
            initial={"offScreen"}
            whileInView={"onScreen"}
            variants={textAnimate}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-2"
          >
            <div className="flex items-center gap-2 bg-white shadow-lg rounded-lg p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 md:w-6 md:h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <p className="font-para text-sm font-semibold">
              Dar-es-salaam, Tanzania.
            </p>
          </motion.div>
        </div>
        <div className="md:col-span-2">
          <form action="" className="">
            <div className="grid md:grid-cols-2 gap-2">
              <div>
                <label
                  for="email-address-icon"
                  class="block mb-2 font-para text-sm font-semibold text-gray-900"
                >
                  Name
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5 text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="email-address-icon"
                    class="border border-purple-300 text-gray-900 text-sm rounded-lg focus:outline-purple-500 focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 p-2.5 "
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div>
                <label
                  for="email-address-icon"
                  class="block mb-2 font-para text-sm font-semibold text-gray-900"
                >
                  Email
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="email-address-icon"
                    class="border border-purple-300 text-gray-900 text-sm rounded-lg focus:outline-purple-500 focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 p-2.5 "
                    placeholder="name@flowbite.com"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <label
                for="message"
                class="block mb-2 font-para text-sm font-semibold text-gray-900"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border focus:outline-purple-500 border-purple-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="w-32 mt-5 px-4 py-2 bg-purple-500 rounded-sm uppercase font-main text-sm text-white"
              >
                send
              </motion.button>
            </motion.div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
