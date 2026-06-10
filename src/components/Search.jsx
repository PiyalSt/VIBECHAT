import { IconButton } from "@mui/material";
import React from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <>
      <div>
        <div className=" w-full flex justify-center py-8">
          <div className="w-full flex justify-between items-center gap-4 py-3 px-5 border-2 border-gray-300 shadow-xl rounded-2xl">
            <input
              className="w-full outline-none font-poppins font-medium text-black/60"
              type="text"
              placeholder="Search"
            />
            <IconButton sx={{ color: "gray" }}>
              <FiSearch className="text-2xl text-gray-800" />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
