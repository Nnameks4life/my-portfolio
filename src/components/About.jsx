import React from "react";

const About = () => {
  return (
    <div name='about' className="w-full h-screen bg-gradient-to-t from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe at
          perspiciatis minus facere in nemo illum, iure ipsam ipsum expedita
          natus ipsa blanditiis suscipit corporis quis! Esse obcaecati error
          accusantium laudantium cum? Repudiandae, alias molestiae ullam ea enim
          consectetur at doloribus et accusamus, dolores quia? Sint in a quas
          dolores!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
          architecto tenetur eligendi rerum error impedit, corporis omnis est
          animi iure blanditiis quaerat. Sapiente saepe eius autem quasi eum ut
          nemo minus consequatur vero temporibus quod accusamus ratione qui
          laboriosam placeat facilis assumenda voluptatibus doloremque ducimus
          eveniet, esse mollitia! Numquam, laborum?
        </p>
      </div>
    </div>
  );
};

export default About;
