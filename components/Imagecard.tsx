import { shimmer, toBase64 } from "@/lib/image";
import React from "react";
import Image from "next/image";
import imegs from "../public/traditional-coffee-cup-heart-shaped-steam-rustic-wood-70228609.webp";
import { Tags } from "lucide-react";

type Props = {
  imagedat?: any;
};

const Imagecard = (props: Props) => {
  const { imagedat } = props;

  return (
    <div>
      <div className=" h-[420px] lg:h-[380px] w-full relative overflow-hidden rounded-[10px] border-2 border-gray-200 bg-pink-200">
        <Image
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64, ${toBase64(
            shimmer(380, 250)
          )}`}
          priority
          src={imagedat?.url}
          alt="imagecard"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover bg-center"
        />
        <div className="absolute bottom-2  px-4 left-2 bg-white capitalize font-bold py-1 w-28 gap-x-1 text-black rounded-lg flex items-center justify-center text-xs">
          <Tags className="text-sm" />
          {imagedat.tags}
        </div>
      </div>
    </div>
  );
};

export default Imagecard;
