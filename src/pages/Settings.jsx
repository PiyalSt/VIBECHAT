import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import userImg02 from "../assets/user-02.png";
import { FaUserEdit } from "react-icons/fa";
import { FaKey, FaRocketchat } from "react-icons/fa6";
import { MdAddPhotoAlternate, MdHelpOutline } from "react-icons/md";
import { BsCircleHalf } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink } from "react-router";

const Settings = () => {
  return (
    <>
      <section id="settings">
        <div className="flex w-full bg-darkGray">
          <div>
            <Navbar />
          </div>

          <div className="w-full border-l border-secondText/50">
            {/* Searchbar part */}
            <div className="m-6">
              <Search />
            </div>

            <div className="w-full h-[80%] mx-6 flex flex-col justify-between">
              <div className="flex">
                <div className="w-6/12 border-r border-secondText/50 relative">
                  <h2 className="font-nunito font-medium text-xl text-secondText my-2">
                    Profile Settings
                  </h2>

                  <div className="flex items-center gap-4 mt-6">
                    <img src={userImg02} alt="userImg02" />
                    <div>
                      <h2 className="font-nunito font-medium text-xl text-secondText">
                        A B M Shawon Islam
                      </h2>
                      <p className="font-poppins font-medium text-base text-secondText/50">
                        Stay home stay safe
                      </p>
                    </div>
                  </div>

                  <div className="mx-6 mt-8 ml-12 flex flex-col gap-4">
                    <div className="flex items-center gap-4 py-2 px-4 cursor-pointer hover:bg-secondText/10 rounded-sm">
                      <FaUserEdit className="text-xl text-secondText/90" />
                      <p className="font-poppins font-normal text-base text-secondText/90">
                        Edit Profile Name
                      </p>
                    </div>
                    <div className="flex items-center gap-4 py-2 px-4 cursor-pointer hover:bg-secondText/10 rounded-sm">
                      <FaRocketchat className="text-xl text-secondText/90" />
                      <p className="font-poppins font-normal text-base text-secondText/90">
                        Edit Profile Status Info
                      </p>
                    </div>
                    <div className="flex items-center gap-4 py-2 px-4 cursor-pointer hover:bg-secondText/10 rounded-sm">
                      <MdAddPhotoAlternate className="text-xl text-secondText/90" />
                      <p className="font-poppins font-normal text-base text-secondText/90">
                        Edit Profile Photo
                      </p>
                    </div>
                    <div className="flex items-center gap-4 py-2 px-4 cursor-pointer hover:bg-secondText/10 rounded-sm">
                      <MdHelpOutline className="text-xl text-secondText/90" />
                      <p className="font-poppins font-normal text-base text-secondText/90">
                        Help
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative w-6/12 mx-6">
                  <h2 className="font-nunito font-medium text-xl text-secondText my-2">
                    Profile Settings
                  </h2>

                  <div className="mx-6 mt-8 ml-12 flex flex-col gap-4">
                    <div className="flex items-center gap-4 py-2 px-4 cursor-pointer hover:bg-secondText/10 rounded-sm">
                      <FaKey className="text-xl text-secondText/90" />
                      <p className="font-poppins font-normal text-base text-secondText/90">
                        Change Password
                      </p>
                    </div>
                    <div className="flex items-center gap-4 py-2 px-4 cursor-pointer hover:bg-secondText/10 rounded-sm">
                      <BsCircleHalf className="text-xl text-secondText/90" />
                      <p className="font-poppins font-normal text-base text-secondText/90">
                        Theme
                      </p>
                    </div>
                    <div className="flex items-center gap-4 py-2 px-4 cursor-pointer hover:bg-secondText/10 rounded-sm">
                      <RiDeleteBin6Line className="text-xl text-secondText/90" />
                      <p className="font-poppins font-normal text-base text-secondText/90">
                        Delete Account
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-10 mt-20 justify-center">
                    <NavLink to={"/login"}>
                      <button className="py-2 px-8 font-poppins font-light text-base bg-secondText/10 text-secondText/80 rounded-full cursor-pointer hover:bg-secondText/15 transition-all duration-300 ease-in">
                        Login
                      </button>
                    </NavLink>
                    <NavLink to={"/registration"}>
                      <button className="py-2 px-8 font-poppins font-light text-base bg-secondText/10 text-secondText/80 rounded-full cursor-pointer hover:bg-secondText/15 transition-all duration-300 ease-in">
                        Registration
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-center items-center ">
                  <h2 className="font-nunito font-medium text-lg text-secondText/90">
                    <a href="https://github.com/PiyalSt">
                      Chat application with PiyalSt - Github
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Settings;
