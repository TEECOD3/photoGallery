import React from "react";
import { PhotoLogo } from "./icons/photologo";
import { UserButton } from "@clerk/nextjs";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex items-center justify-center h-20 w-full">
      <div className="max-w-[70%] w-full mx-auto flex justify-between items-center ">
        <div>
          <PhotoLogo className="h-8 w-8" />
        </div>
        <div className="">
          hi
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  );
};

export default Header;
