import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import marketplace from "../assets/portfolio/marketplace.jpeg";
import chatapp from "../assets/portfolio/chatapp.jpeg";
import personal from "../assets/portfolio/personal.jpeg";
import gymtypescript from "../assets/portfolio/gym-typescript.jpeg";
import buyershub from "../assets/portfolio/buyershub.jpeg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: chatapp,
      link: `https://emekas-chat-application.netlify.app`,
      gitLink: `https://github.com/frankdev0/Realtime_ChatApp_Using_Firebase`,
      title: "Chat App"
    },
    {
      id: 2,
      src: personal,
      link: `https://personality-assessment-app.netlify.app`,
      gitLink: `https://github.com/frankdev0/Personality_Assessment_App`,
      title: "Personal Assessment App"
    },
    {
      id: 3,
      src: buyershub,
      link: `https://tofa-buyershub-admin.netlify.app`,
      gitLink: `https://github.com/frankdev0/TOFA-NEW-ADMIN-DASHBOARD`,
      title: "Buyers Admin Dasbaord"
    },
    {
      id: 4,
      src: gymtypescript,
      link: `https://gym-project-using-typescript-upl.pages.dev/`,
      gitLink: `https://github.com/frankdev0/Gym-Project-Using-Typescript`,
      title: "Gym Website Using Typescript"
    },
    {
      id: 5,
      src: marketplace,
      link: `https://github.com/frankdev0/New_Marketplace_Admin`,
      gitLink: `https://github.com/frankdev0/New_Marketplace_Admin`,
      title: "Admin Dashboard"
    },
    {
      id: 6,
      src: arrayDestruct,
      link: `https://github.com/frankdev0/Jewelry-store`,
      gitLink: `https://github.com/frankdev0/Jewelry-store`,
      title: "Jewelry Store"
    },
  ];
  console.log("portfolios", portfolios);
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, gitLink, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={link}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={gitLink}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
              <h6 className="w-4/5 mx-auto">{title}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
