/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProfileImage = (props: { picture?: string }) => {
  return (
    <div className="p-2 h-[50px] border-[1px] border-gray-300 w-[50px] rounded-full">
      <img
        src={
          props.picture ||
          "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        }
        className="rounded-full h-full w-full"
        alt="profile image"
      />
    </div>
  );
};

export default ProfileImage;
