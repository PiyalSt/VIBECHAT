import { IconButton } from "@mui/material";
import React from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <>
      <div>
        <div className=" w-full flex justify-center">
          <div className="w-full flex justify-between items-center gap-4 py-2 px-4 border-2 border-secondText/50 shadow-lg shadow-secondText/10 rounded-2xl">
            <input
              className="w-full border-none outline-none font-nunito font-medium text-secondText/90"
              type="text"
              placeholder="Search"
            />
            <IconButton sx={{ color: "white" }}>
              <FiSearch className="text-2xl text-secondText" />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
