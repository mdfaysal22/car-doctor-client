import React from "react";
import aboutImg from "./../../../../assets/images/about_us/parts.jpg";
import person from "./../../../../assets/images/about_us/person.jpg";
const About = () => {
  return (
    <div className=" mx-10 my-10 ">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="relative md:w-1/2">
          <img className="w-4/5 h-auto rounded-lg" src={person} alt="" />
          <img
            className="absolute -bottom-12 right-16 border-4 rounded-lg border-light shadow-lg w-3/5 h-auto"
            src={aboutImg}
            alt=""
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left mt-16 md:mt-0">
          <small className="text-xs font-bold text-orange">About Us</small>
          <h1 className="text-3xl font-semibold my-2">
            We are qualified & of experience in this field
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. <br />
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>

          <button className="btn mt-4 btn-outline bg-orange text-light font-semibold border-2 border-orange hover:border-dark hover:text-dark rounded-none">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
