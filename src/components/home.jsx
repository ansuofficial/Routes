import React from "react";
import Tilt from "react-parallax-tilt";
const Home = () => {
  return (
    <Tilt>
      <div className="px-12 mt-4 ">
        <div className="flex items-center justify-center bg-gradient-to-r from-pink-400 via-teal-50 to-violet-300 h-[70vh] ring-slate-200 shadow-xl rounded">
          <h1>Hello this is Home</h1>
        </div>
      </div>
    </Tilt>
  );
};

export default Home;
