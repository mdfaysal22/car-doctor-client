import { useState } from "react";
import { BsHandbag, BsSearch } from "react-icons/bs";
import { Link,NavLink } from "react-router-dom";
import logo from "./../../../assets/logo.svg";

const Header = () => {
  const [state, setState] = useState(false);

  // Replace / path with your path
  const navigation = [
    { title: "Home", path: "/home" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
  ];
  return (
    <nav className="bg-white w-full border-b md:border-0 md:static">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-2 md:py-3 md:block">
          <Link to="/">
            <div className="w-20 h-16">
              <img src={logo} className="w-full h-auto" alt="Float UI logo" />
            </div>
          </Link>
          <div className="md:hidden flex items-center">
            <label htmlFor="my-modal-3" className="btn border-0">
              <BsSearch className="text-2xl mr-2"></BsSearch>
            </label>
            <BsHandbag className="text-2xl mr-2"></BsHandbag>
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-2 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-600 hover:text-indigo-600">
                  <NavLink className={({ isActive }) =>
                        isActive ? "text-orange" : undefined
                      } to={item.path}>{item.title}</NavLink>
                </li>
              );
            })}
            <Link
              to="/appointment"
              className="py-3 block md:hidden btn border-orange border-2 text-orange px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow"
            >
              Appointment
            </Link>
          </ul>
        </div>
        <div className="hidden md:inline-block ">
          <div className="flex items-center">
            <label htmlFor="my-modal-3" className="btn border-0">
              <BsSearch className="text-2xl mr-2"></BsSearch>
            </label>
            <BsHandbag className="text-2xl mr-2"></BsHandbag>
            <Link
              to="/appointment"
              className="py-3 btn border-orange border-2 text-orange px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow"
            >
              Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box bg-light relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 hover:bg-orange hover:text-light top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Search Engineer
          </h3>
          <form class="w-full max-w-md flex gap-2 my-3 sm:mb-5">
            <input placeholder="Search" type='text' class="w-full flex-1 bg-gray-white text-gray-800 placeholder-orange border  border-orange focus:ring ring-orange rounded outline-none transition duration-100 px-3 py-2" />

            <button class="inline-block bg-orange focus:border-orange text-light hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2"><BsSearch></BsSearch></button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
