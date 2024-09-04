import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-roseColor">
      <nav className="flex justify-between items-center p-0.4 w-full text-white">
        <Link to="/" className="flex-1 text-center">
          <AiOutlineHome className="text-ml sm:text-2xl" />
        </Link>
        <Link to="/search" className="flex-1 text-center">
          <IoSearchOutline className="text-ml sm:text-2xl" />
        </Link>
        <Link to="/upload" className="flex-1 text-center">
          <CiSquarePlus className="text-ml sm:text-2xl" />
        </Link>
        <Link to="/liked" className="flex-1 text-center">
          <IoMdHeartEmpty className="text-ml sm:text-2xl" />
        </Link>
        <Link to="/profile" className="flex-1 text-center">
          <img
            src="./public/images/png/image1.png"
            alt="image-profile"
            className="w-10 h-10"
          />
        </Link>
      </nav>
    </div>
  );
};

export default BottomNav;
