import { IconButton } from "@mui/material";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const ListContainer = ({ listName, listItem }) => {
  return (
    <>
      <div className="w-full h-full flex flex-col">
        
        <div className="border-b border-secondText/50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-nunito font-medium text-xl text-secondText/80 uppercase">
              {listName}
            </h2>
            <IconButton sx={{ color: "#C8BCF6" }}>
              <BsThreeDotsVertical className="text-2xl text-secondText/80" />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListContainer;
