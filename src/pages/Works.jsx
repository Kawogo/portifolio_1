import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import WebDevelopment from "../components/Work/WebDevelopment";
import Graphics from "../components/Work/Graphics";

import Ams from "../assets/work-ams.png";
import Portifolio from "../assets/work-portifolio.png";
import Sms from "../assets/work-sms.png";

const webJobs = [
  {
    id: 1,
    title: "Advanced Assets Management System",
    description:
      "A web-based application for managing assets and ownership of assets. Built with Javascript(ES6) and Yii2 framework, it has a secure user role and permission functionality with advanced features such as email confirmitaion.The system also generates reports for assets and ownership criterias.",
    img: Ams,
  },
  {
    id: 2,
    title: "Class Management System",
    description:
      "Advanced web based application for managing college level class activities. It simplifies the management of student registration, course and programmes registration, field projects assignments with loaction and attendance supervision, timetable uploads, class attendance management and reading assignments.The system also generates a number of reports (Attendance)",
    img: Sms,
  },
  {
    id: 3,
    title: "Portifolio website",
    description:
      "This is a ReactJs and Tailwind Css project to showcase my skill and experience.The website is responsive with animations mad using Framer Motion framework.",
    img: Portifolio,
  },
];
const Works = () => {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <div className="section-container py-5 md:py-10" id="my-works">
      <PageTitle title="my works" />
      <div className="flex flex-col items-center">
        <div className="flex gap-5 mt-10 items-center font-semibold text-sm bg-gray-50 shadow-xl p-2 rounded-md border border-purple-400">
          <button
            onClick={() => setActiveTab("web")}
            className="font-semibold text-sm cursor-pointer"
          >
            Web Development
          </button>
          <button
            onClick={() => setActiveTab("ui/ux")}
            className="font-semibold text-sm cursor-pointer"
          >
            UI/UX Design
          </button>
        </div>
        <div className="flex flex-col gap-5 mt-10 md:px-32 px-10">
          {activeTab === "web" && <WebDevelopment jobs={webJobs} />}
          {activeTab === "ui/ux" && <Graphics />}
        </div>
      </div>
    </div>
  );
};

export default Works;
