import React, { useEffect, useState } from "react";
import ServicesCard from "./ServiceCard/ServicesCard";

const Services = () => {
  const [servies, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center my-5">
        <small className="text-orange text-xs font-bold">Services</small>
        <h1 className="text-3xl font-semibold">Our Service Area</h1>
        <p className="md:w-1/2 mx-auto text-[#6a6a6a]">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 ">
        {servies.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>

      <div className="text-center mt-5">
        <button className="btn btn-outline border-orange border-2 text-orange">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
