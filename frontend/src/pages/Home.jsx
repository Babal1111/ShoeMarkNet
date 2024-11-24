import React from "react";
import "../index.css";
import Navbar from "../components/common/Navbar";
import sneakers from "../assets/sneaker.png";

function Home() {
  return (
    <>
      <div className="flex flex-col absolute w-full h-5/6 bg-gradient-to-r from-slate-100 via-slate-500 to-slate-800 clip-triangle-top">
        <Navbar />
        <div className="relative flex justify-end w-full mt-10 ">
          <img src={sneakers} alt="loading" className="transform rotate-12 w-6/12 pr-9 mr-10" />
        </div>
      </div>
    </>
  );
}

export default Home;
