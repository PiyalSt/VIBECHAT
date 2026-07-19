import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoIosNotifications, IoMdLogOut } from "react-icons/io";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { AiFillSetting } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { Link, NavLink } from "react-router";
import assets from "../assets/assets";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const auth = getAuth();
  const db = getDatabase();

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userRef = ref(db, "users/" + user.uid);

        onValue(userRef, (snapshot) => {
          setCurrentUser(snapshot.val());
        });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <section id="navbar-components">
        <div className="px-6 h-screen flex flex-col items-center justify-between py-8 bg-darkGray">
          <div>
            <div className="w-14 h-14 flex items-center justify-center cursor-pointer">
              <Link to={"/home"}>
                <img
                  className="w-full h-full object-cover"
                  src={assets.profile}
                  alt="profileImg"
                />
              </Link>
            </div>
            <div className="text-center mt-2">
              <h2 className="text-white/70 uppercase">{currentUser?.username}</h2>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <NavLink to={"/home"}>
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
                  <CiSettings className="text-secondText text-2xl" />
                </div>
              </li>
            </NavLink>
          </div>

          <div>
            <li className="list-none relative cursor-pointer">
              <div className="group p-4 rounded-sm hover:bg-[#1F1F22] w-fit">
                <img src={assets.LogoutIcons} alt="homeIcons" />

                <span
                  className="absolute -top-8 left-1 text-secondText
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
