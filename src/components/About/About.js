import React from "react";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="my-5">
          <h1>Profile</h1>
          <p className="text-gray-500 font-medium">
            I'm a creative React developer
          </p>
        </div>
        <div className="md:grid grid-cols-3 my-40">
          <div className="text-start">
            <p className="text-3xl font-medium">About me</p>
            <p className="text-gray-500 font-medium">
              I am a programmer. My goal is to make a better technology that
              will be helpful to every person. The bigger goal is research for
              Space. However, web development is one kind of passion here I
              learned tons of programming fundamentals. If you are interested to
              know about me DM me.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <img
                className="rounded-full w-2/5"
                src="https://img.freepik.com/premium-psd/character-avatar-3d-illustration_460336-706.jpg?w=740"
                alt="profile"
              />
            </div>
          </div>
          <div className="text-start">
            <p className="text-3xl font-medium">Details</p>
            <p className="font-medium">Name:</p>
            <p>Code Bear</p>
            <p className="font-medium">Age:</p>
            <p className="text-gray-400">Loading...</p>
            <p className="font-medium">Location:</p>
            <p>Bangladesh 🇧🇩</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
