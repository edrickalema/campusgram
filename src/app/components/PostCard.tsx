/* eslint-disable @next/next/no-img-element */
import React from "react";
import ProfileImage from "./ProfileImage";
import { CiHeart } from "react-icons/ci";
import { HiDotsVertical } from "react-icons/hi";

const PostCard = () => {
  return (
    <div className="card border-2 border-gray-100 rounded-md mb-8 ">
      <div className="card-title flex items-center justify-between p-5">
        <div className="flex items-center">
          <ProfileImage />

          <p className="ml-2 text-md text-black font-semibold">Alema Edrick</p>
        </div>

        <HiDotsVertical />
      </div>

      {/* Card content */}

      <div className="card-content">
        <img
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          className=""
          alt="profile image"
        />

        {/* Links */}
        <div className="flex items-center p-5">
          <CiHeart className="text-lg cursor-pointer" />
          <span className="ml-2">Like</span>
        </div>

        {/* Post Information */}
        <div className="flex p-5 pb-5 justify-between items-center">
          <div className=" flex">
            <h1 className="mr-2 font-semibold text-black">alemaedrick</h1>
            <span className="text-gray-400 text-md">Whats Happening</span>
          </div>
          <p className="text-base text-gray-400">2 hours ago</p>
        </div>
      </div>

      {/* Comment Box */}
      <div className="max-h-[80px] px-8 pb-5 overflow-auto">
        <div className="flex items-center pb-1">
          <div className="p-1 h-[25px] border-[1px] border-gray-300 w-[25px] rounded-full">
            <img
              src={
                "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              }
              className="rounded-full h-full w-full"
              alt="profile image"
            />
          </div>
          <p className="text-xs ml-2 text-gray-400">Lorem ipsum dolor</p>
        </div>
      </div>

      <div className="flex px-5 pb-5 items-center justify-between">
        <div className="flex items-center ">
          <ProfileImage />
          <input
            type="text"
            name="comment"
            id=""
            className="border-0 outline-none ml-2 bg-transparent"
            placeholder="Enter your comment"
          />
        </div>

        <p className="text-blue-500 text-sm font-bold">Send</p>
      </div>
    </div>
  );
};

export default PostCard;
