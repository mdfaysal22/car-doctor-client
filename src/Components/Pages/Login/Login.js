import React, { useContext } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GrLinkedinOption } from "react-icons/gr";
import { Link } from "react-router-dom";
import { userContext } from "../../../Contexts/AuthContext";
import loginImg from "./../../../assets/images/login/login.svg";

const Login = () => {
  const { user } = useContext(userContext);
  return (
    <div className="mx-10 my-10 flex justify-between item-center flex-col md:flex-row">
      <div className="w-3/5 mx-auto md:w-1/2">
        <img src={loginImg} alt="" />
      </div>
      <div className="md:w-1/2">
        <div className="border-2 p-10 rounded-md border-[#999]">
          <form>
            <h1 className="text-4xl text-center font-semibold">Login Now</h1>
            <div>
              <label
                for="email"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Email
              </label>
              <input
              type="email"
                name="email"
                placeholder="Email"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>
            <div className="my-5">
              <label
                for="password"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Confirm Password
              </label>
              <input
              type="password"
                name="password"
                placeholder="Confirm Password"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>
            <button class="btn w-full bg-orange border-2 text-light font-semibold text-xl hover:border-dark hover:text-dark">Log in</button>

          </form>

          <p className="text-center my-5 text-xl font-semibold">Or Sign In With</p>

          <div className="flex justify-center gap-3 my-3">
            <button className="btn btn-circle hover:bg-[#e5e5e5]"><FaFacebookF className="text-xl"></FaFacebookF> </button>
            <button className="btn btn-circle hover:bg-[#e5e5e5]"><GrLinkedinOption className="text-xl"></GrLinkedinOption></button>
            <button className="btn btn-circle hover:bg-[#e5e5e5]"><FcGoogle className="text-xl"></FcGoogle></button>
          </div>


          <p className="text-center font-semibold text-xl">Create an Account? <Link to={'/signup'} className="text-orange">Sign In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
