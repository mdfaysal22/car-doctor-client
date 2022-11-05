import React from "react";
import { GoWatch } from "react-icons/go";
import { RiMessage2Fill } from "react-icons/ri";
const COA = () => {
  return (
    <div className="my-5 flex flex-col md:flex-row py-5 md:py-0 justify-around text-light rounded-lg bg-[#151515] items-center  md:h-60 mx-10">
      <div className="flex mt-5 md:mt-0 items-center gap-3">
          <GoWatch className="text-4xl text-orange"></GoWatch>
        <div >
        <p className="md:text-xl">We are open monday-friday</p>
          <h1 className="text-xl md:text-2xl lg:text-3xl"> 7:00 am - 9:00 pm</h1>
        </div>
      </div>
      <div className="flex mt-5 md:mt-0 items-center gap-3">
        <RiMessage2Fill className="text-4xl text-orange"></RiMessage2Fill>
        <div>
          <p className="md:text-xl">Have a question?</p>
          <h1 className="text-xl md:text-2xl lg:text-3xl">+2546 251 2658</h1>
        </div>
      </div>
      <div className="flex mt-5 md:mt-0 items-center gap-3">
        <RiMessage2Fill className="text-4xl text-orange"></RiMessage2Fill>
        <div>
          <p className="md:text-xl">Need a repair? our address</p>
          <h1 className="text-xl md:text-2xl lg:text-3xl">Liza Street, New York</h1>
        </div>
      </div>
    </div>
  );
};

export default COA;
