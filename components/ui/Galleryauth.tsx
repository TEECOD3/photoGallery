"use client";
import React from "react";
import { Button } from "./button";
import { useRouter } from "next/navigation";

const Galleryauth = ({}: any) => {
  const router = useRouter();
  const handleAuth = () => {
    router.push("/Gallery");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-black text-5xl ">Take a look at amazing images</h1>
      <Button className="mt-4" onClick={handleAuth}>
        view gallery
      </Button>
    </div>
  );
};

export default Galleryauth;
