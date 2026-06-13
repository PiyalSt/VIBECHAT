import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosNotifications, IoMdLogOut } from "react-icons/io";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { AiFillSetting } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { Link, NavLink } from "react-router";
import assets from "../assets/assets";

const Navbar = () => {
  return (
    <>
      <section id="navbar-components">
        <div className="px-6 h-screen flex flex-col items-center justify-between py-8 bg-darkGray">
          <div className="w-14 h-14 flex items-center justify-center cursor-pointer">
            <Link to={"/"}>
              <img
                className="w-full h-full object-cover"
                src={assets.profile}
                alt="profileImg"
              />
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <NavLink to={"/"}>
              <li className="list-none relative overflow-hidden cursor-pointer">
                <div className="p-4 rounded-sm hover:bg-[#1F1F22]">
                  <img src={assets.homeIcons} alt="homeIcons" />
                </div>
              </li>
            </NavLink>

            <NavLink to={"/messages"}>
              <li className="list-none relative overflow-hidden cursor-pointer">
                <div className="p-4 rounded-sm hover:bg-[#1F1F22]">
                  <img src={assets.ListIcons} alt="homeIcons" />
                </div>
              </li>
            </NavLink>

            <NavLink to={"/notification"}>
              <li className="list-none relative overflow-hidden cursor-pointer">
                <div className="p-4 rounded-sm hover:bg-[#1F1F22]">
                  <img src={assets.NotificationIcons} alt="homeIcons" />
                </div>
              </li>
            </NavLink>

            <NavLink to={"/settings"}>
              <li className="list-none relative overflow-hidden cursor-pointer">
                <div className="p-4 rounded-sm hover:bg-[#1F1F22]">
                  <CiSettings className="text-[#C8BCF6] text-2xl" />
                </div>
              </li>
            </NavLink>
          </div>

          <div>
            <li className="list-none relative cursor-pointer">
              <div className="group p-4 rounded-sm hover:bg-[#1F1F22] w-fit">
                <img src={assets.LogoutIcons} alt="homeIcons" />

                <span
                  className="absolute -top-8 left-1 text-[#C8BCF6]
                  opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition-all duration-500"
                >
                  Logout
                </span>
              </div>
            </li>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
