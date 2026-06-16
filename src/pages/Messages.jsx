import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import ProfileCard from "../components/ProfileCard";
import userImg01 from "../assets/user-01.png";
import userImg02 from "../assets/user-02.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IconButton } from "@mui/material";
import { BiHappy, BiSend } from "react-icons/bi";
import { CiCamera } from "react-icons/ci";
import ChatText from "../components/ChatText";
import ListContainer from "../components/ListContainer";

const Messages = () => {

  const [liveText, setLiveText] = useState()

  const trackText = (e) => {
    setLiveText(e.target.value)
  }

  const handleSend = () => {
    <ChatText chatText={liveText} />
  }

  return (
    <>
      <section>
        <div className="flex">
          <div className="w-6/12">
            <div className="flex">
              <div>
                <Navbar />
              </div>
              <div className="w-full h-screen bg-darkGray overflow-y-scroll border-l border-secondText/50">
                <div className="m-6">
                  <Search />
                </div>

                <div className="w-full">
                  <div className="m-6">
                    <ListContainer listName={"Friend List"} />
                  </div>

                  <div className="mx-6">
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-6/12 border-l border-secondText/50 bg-darkGray">
            <div className="flex flex-col justify-between h-full">

              {/* message profile part */}
              <div className="mx-6 pt-6 pb-4 border-b border-secondText/50">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img className="w-16" src={userImg02} alt="userImg02" />
                    <div>
                      <h2 className="font-nunito font-medium text-xl text-secondText">
                        Swathi
                      </h2>
                      <p className="font-nunito font-medium text-sm text-green-400/70">
                        Online
                      </p>
                    </div>
                  </div>
                  <IconButton sx={{color: 'white'}}>
                    <BsThreeDotsVertical className="text-2xl text-secondText/50" />
                  </IconButton>
                </div>
              </div>

              {/*  */}
              <div className="mx-6 h-120 overflow-y-scroll">
                <div className="py-4">
                  <ChatText chatText="lorem flsdjflsdjf lds flkjf df" />
                  <ChatText chatText="Hello" />
                  <ChatText chatText="lorem flsdjflsdjf lds flkjf df" />
                  <ChatText chatText="Hello" />
                  <ChatText chatText="lorem flsdjflsdjf lds flkjf df" />
                  <ChatText chatText="Hello" />
                  <ChatText chatText="lorem flsdjflsdjf lds flkjf df" />
                  <ChatText chatText="Hello" />
                  <ChatText chatText="lorem flsdjflsdjf lds flkjf df" />
                  <ChatText chatText="Hello" />
                  <ChatText chatText="lorem flsdjflsdjf lds flkjf df" />
                </div>
              </div>

              {/* messaging send part || message input part */}
              <div className="mx-6 border-t border-secondText/50">
                <div className="flex justify-between items-center gap-2 pb-8 pt-6">

                  <div className="w-full flex justify-between gap-4 border border-secondText/50 py-2 pl-6 pr-4 rounded-full">
                    <input 
                      onChange={trackText}
                      className="w-full outline-none font-nunito font-medium text-base text-secondText"
                      type="text"
                      placeholder="write here..."
                    />
                    <div className="flex items-center">
                      <IconButton sx={{color: 'white'}}>
                        <BiHappy className="text-2xl text-secondText/90" />
                      </IconButton>
                      <IconButton sx={{color: 'white'}}>
                        <CiCamera className="text-2xl text-secondText/90" />
                      </IconButton>
                    </div>
                  </div>

                  <div>
                    <IconButton  sx={{ color: "#C8BCF6" }}>
                      <li className="list-none">
                        <BiSend className="text-4xl text-secondText/60" />
                      </li>
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Messages;
