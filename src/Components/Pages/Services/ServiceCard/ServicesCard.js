import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const ServicesCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="p-2 border-[2px] rounded-md border-[#E8E8E8]">
      <div className="h-60 bg-dark group overflow-hidden">
        <img
          className="w-full object-cover object-center hover:opacity-50 group-hover:scale-110 transition duration-200 rounded-md h-full"
          src={img}
          alt=""
        />
          
      </div>

      <div>
        <div>
          <p className="text-2xl font-semibold mt-2">{title}</p>
          <div className="flex justify-between my-3 items-center">
            <p className="text-xl font-semibold">Price : {price}</p>
            <button className="text-xl font-semibold text-orange">
              <AiOutlineArrowRight></AiOutlineArrowRight>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
