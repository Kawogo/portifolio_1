import React from "react";

const Footer = () => {
  return (
    <div className="section-container bg-gray-50 py-5" id="">
      <div className="flex flex-col items-center md:items-center space-y-5">
        <p className="font-main text-sm capitalize flex">top</p>
        <a
          href="#home"
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
              d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Footer;
