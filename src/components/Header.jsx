import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaCross, FaShoppingCart, FaTimes } from "react-icons/fa";
import { useCartContext } from "../context/CartContext";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { total_item } = useCartContext();
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
      url: "/",
    },
    {
      id: 2,
      link: "Products",
      url: "/products",
    },
    {
      id: 3,
      link: "About",
      url: "about",
    },
    {
      id: 4,
      link: "Contact",
      url: "contact",
    },
  ];
  return (
    <>
      <header className="w-full h-[8vh] bg-slate-800 relative px-4">
        <div className="nav-wrapper h-full max-w-[1300px] w-full m-auto flex justify-between items-center">
          <NavLink to="/">
            <h3 className="text-neutral-100 font-bold text-3xl">MeroPasal</h3>
          </NavLink>
          {/* Navbar for bigger screen */}
          <div className="navlinks hidden md:block">
            <ul className="md:flex text-slate-200 gap-16">
              {links.map(({ id, link, url }) => (
                <li key={id} className="">
                  <NavLink
                    to={url}
                    className="hover:border-b-2 border-b-white capitalize text-lg font-medium opacity-80 hover:opacity-100"
                  >
                    {link}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-items hidden md:flex md:items-center md:gap-8">
            <div className="login flex gap-6 items-center text-white">
              {isAuthenticated ? (
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              ) : (
                <button onClick={() => loginWithRedirect()}>Log In</button>
              )}
              {isAuthenticated && <h2>{user.name}</h2>}

              <div className="cart-log relative px-3 py-3">
                <NavLink to="/cart">
                  <FaShoppingCart size={25} className="" />
                  <span className="cart-total absolute top-[15%] left-[60%] bg-gray-700 rounded-full px-[4px] font-semibold py-[0.5px] text-[10px]">
                    {total_item}
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
          {/*  Navbar for smaller screen */}
          <div
            className="mobile-menu flex absolute top-2/4 right-[5%] -translate-y-2/4 md:hidden"
            onClick={() => setNav(!nav)}
          >
            {nav ? (
              <FaTimes size={25} color="white" />
            ) : (
              <FaBars size={25} color="white" />
            )}
          </div>
          {nav && (
            <div className="nav-items w-full h-[93vh] flex flex-col bg-slate-800 absolute top-[7vh]">
              <div className="navlinks pb-8 w-full ">
                <ul className=" text-slate-200">
                  {links.map(({ id, link, url }) => (
                    <li
                      key={id}
                      className="px-4 py-6 text-3xl text-center font-semibold"
                    >
                      <NavLink
                        to={url}
                        className="hover:border-b-2 border-b-white capitalize"
                        onClick={() => setNav(!nav)}
                      >
                        {link}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="login flex flex-col gap-2 items-center text-white">
                <button onClick={() => loginWithRedirect()}>Log In</button>
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
                <div className="cart-log relative px-3 py-3">
                  <NavLink to="/cart">
                    <FaShoppingCart size={40} className="" />
                    <span className="cart-total absolute top-[15%] left-[60%] bg-gray-700 rounded-full px-1.5 font-semibold py-0.5 text-xs">
                      {total_item}
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
