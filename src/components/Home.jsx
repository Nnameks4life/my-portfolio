import React from "react";
import myPic from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front-End Developer
          </h1>
          <p className="text-gray-500 py-4 max-w-md">
            {" "}
            I have 3 years of experience building and designing software.
            Currently I like to work on web Applications using technologies like
            React, Javascript, CSS, Html, Tailwind, Ant Design.
          </p>
          <div>
            
            <Link to='portfolio' smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              portfolio{" "}
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />{" "}
              </span>{" "}
            </Link>
          </div>
        </div>
        <div>
          <img
            src={myPic}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
