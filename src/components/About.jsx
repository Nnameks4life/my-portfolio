import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-t from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          My name is Nnaemeka Ogunewe, and I go by Emeka. I am a frontend
          developer based in Lagos, Nigeria. I have developed various types of
          frontend Application, ranging from an Admin dashboard; where I implemented CRUD(Create,
          Read, Upadate, and Delete) functionalities on it. I have also worked on an
          E-commerce website for buyers and sellers. I am passionate about
          cutting-edge, pixel-perfect, beautiful interfaces and intuitively
          implemented UX.
        </p>
        <br />
        <p className="text-xl mb-5">
          Here are some of my most relevant qualifications and accomplishments:
          </p>
          <ul className="list-disc text-xl">
            <li>Three years of experience as a Front-End Developer </li>
            <li>In my previous company, I developed and Implemented two user admin dashboards for monitoring sales and transactions on the "Buyers hub platform" and the "Market place platform". This helped to boost the company’s revenue to about 30%. I also created an instant messaging platform for interacting with buyers, this helped in resolving disputes and attending to buyer's order in a timely and efficient manner.</li>
            <li>
              Crafted various website features using REACT JS, JAVASCRIPT, TYPESCRIPT,
              HTML5, SCSS, CSS3,and CSS Libraries like Tailwind, Bootstrap, and Ant
              Design.
            </li>
            <li>
              Developed and Implemented project scope and timelines based on the
              design-develop-deploy process.
            </li>
            <li>
              Collaborated with UX designers and Back End Developers and ensured
              coherence between all parties.
            </li>
            <li>Tested feature prototypes for bugs and user experience.</li>
          </ul>
        
      </div>
    </div>
  );
};

export default About;
