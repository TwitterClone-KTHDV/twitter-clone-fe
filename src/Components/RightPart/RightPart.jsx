import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const RightPart = () => {
  const handleChangeTheme = () => {
    console.log("change theme");
  };
  return (
    <div className="py-5 sticky top">
      <div className="relative flex items-center">
        <input
          type="text"
          className="py-3 rounded-full text-gray-500 w-full pl-12"
        />
        <div className="absolute top-0 left-0 pl-3 pt-3">
          <SearchIcon className="text-gray-500" />
        </div>
        <Brightness4Icon onClick={handleChangeTheme} />
      </div>
      <section className="my-5">
        <h1 className="text-x1 font-bold">Get Verified</h1>
        <h1 className="font-bold my-2">Subscribe to unlock new Features</h1>
        <Button
          variant="contained"
          sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }}>
          Get Verified
        </Button>
      </section>
      <section className="mt-7 space-y-5">
        <h1 className="font-bold text-x1 py-1">What's happening</h1>
        <div>
          <p className="text-sm">FIFA Women's World Cup · LIVE</p>
          <p className="font-bold">Philippines vs Switzerland</p>
        </div>
        {[1, 1, 1].map((item) => (
          <div className="flex justify-between w-full">
            <div>
              <p>Entertainment · Trending</p>
              <p className="font-bold">#TheMarvels</p>
              <p>34.3k Tweets</p>
            </div>
            <MoreHorizIcon />
          </div>
        ))}
      </section>
    </div>
  );
};

export default RightPart;
