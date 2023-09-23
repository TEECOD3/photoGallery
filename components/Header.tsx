"use client";
import React from "react";
import { PhotoLogo } from "./icons/photologo";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  const { data } = useSession();

  return (
    <header className="flex items-center justify-center h-20 w-full">
      <div className="max-w-[70%] w-full mx-auto flex justify-between items-center ">
        <div>
          <Link href="/">
            <PhotoLogo className="h-8 w-8" />
          </Link>
        </div>

        {data ? (
          <div className="flex items-center justify-center gap-x-4">
            <Button
              className="text-white font-bold text-sm cursor-pointer"
              onClick={() => {
                signOut();
              }}
            >
              signout
            </Button>
            <p className="text-gray-500 font-bold text-sm ">
              {data?.user?.name}
            </p>
          </div>
        ) : (
          <Button
            className="text-white font-bold text-sm cursor-pointer"
            onClick={() => {
              signIn();
            }}
          >
            sign in
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
