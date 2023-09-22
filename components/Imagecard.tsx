import { shimmer, toBase64 } from "@/lib/image";
import React from "react";
import Image from "next/image";
import { Tags } from "lucide-react";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

type Props = {
  imagedat?: any;
};

const Imagecard = (props: Props) => {
  const { imagedat } = props;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: imagedat.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div>
      <div
        className=" h-[420px] lg:h-[380px] w-full relative overflow-hidden rounded-[10px] border-2 border-gray-200 bg-pink-200"
        style={style}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
      >
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
