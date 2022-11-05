import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./../Banar.css";

const BannarItem = ({caruosel}) => {
    const {img, id, pre, next}= caruosel;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
          <div className="img-gradient">
            <img src={img} alt="Slider Photos" className="w-full h-full md:h-auto" />
          </div>
          <div className="absolute z-10 text-light transform -translate-y-1/3 md:-translate-y-1/2 left-10 top-32 md:top-1/2">
            <h1 className="text-xl md:text-4xl lg:text-6xl font-semibold">
              Affordable <br /> Price For
              <br /> Car Servicing
            </h1>
            <p className="md:text-xl md:my-10">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="my-4">
              <button className="btn btn-sm md:btn-lg mr-3 btn-outline border-2 hover:bg-transparent hover:border-light hover:text-light bg-orange border-orange text-light">
                Discover More
              </button>
              <button className="btn btn-sm md:btn-lg mt-3 md:mt-0 hover:text-light hover:border-light btn-outline border-2 border-orange text-orange">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute  flex justify-end gap-5 transform -translate-y-1/2 left-5 md:right-5 bottom-0">
            <a
              href={`#slide${pre}`}
              className="btn border-2 hover:border-orange border-light text-light hover:bg-orange hover:text-light btn-square"
            >
              <AiOutlineArrowLeft className="text-xl font-semibold"></AiOutlineArrowLeft>
            </a>
            <a
              href={`#slide${next}`}
              className="btn border-2 hover:border-orange border-light text-light hover:bg-orange hover:text-light btn-square"
            >
              <AiOutlineArrowRight className="text-xl font-semibold"></AiOutlineArrowRight>
            </a>
          </div>
        </div>
    );
};

export default BannarItem;