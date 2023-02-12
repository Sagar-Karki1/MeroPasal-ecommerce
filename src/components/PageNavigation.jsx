import React from "react";
import { NavLink } from "react-router-dom";

const PageNavigation = ({ title }) => {
  return (
    <>
      <section className="h-[4rem] bg-slate-200 flex items-center text-xl text-gray-600 font-medium px-4">
        <div className="w-full max-w-[1300px] m-auto">
          <NavLink to="/" className="text-cyan-600 font-semibold text-2xl pr-1">
            Home
          </NavLink>
          /{title}
        </div>
      </section>
    </>
  );
};

export default PageNavigation;
