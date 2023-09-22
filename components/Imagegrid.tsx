import React, { useState } from "react";
import Imagecard from "./Imagecard";
import { Input } from "./ui/input";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
type Props = {
  imagesdata: imageprops[];
};

const Sortableuser = ({ items }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: items });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return items.map((image: any, i) => (
    <div
      className=""
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      key={i}
    >
      <Imagecard />
    </div>
  ));
};

const Imagegrid = (props: Props) => {
  const [items] = useState([1, 2, 3]);
  const { imagesdata } = props;
  const onDragEnd = (event: any) => {
    console.log("ondragend", event);
  };

  return (
    <main className="max-w-[80%] mx-auto ">
      <div className="w-full flex">
        <div className="lg:w-[60%]"></div>
        <div className="flex-1">
          <Input placeholder="search..." />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4">
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            <Sortableuser items={items} />
          </SortableContext>
        </DndContext>
      </div>
      {/* <div className=""></div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-4">
        {/* {imagesdata.slice(4, 6).map((image: imageprops) => (
          <Imagecard key={image.id} imagedat={image} />
        ))} */}
      <Imagecard />
      <Imagecard />
      {/* </div> */}

      {/* <div className="flex mt-4 ">
        <div className="w-full grid grid-cols-1  lg:grid-cols-3 gap-x-4 gap-y-4">
          {imagesdata.slice(6, 9).map((image: imageprops) => (
            <Imagecard key={image.id} imagedat={image} />
          ))}
          <Imagecard />
          <Imagecard />
          <Imagecard />
        </div>
      </div> */}
    </main>
  );
};

export default Imagegrid;

//  <div className="flex mt-4 ">
//    <div className="w-full grid grid-cols-1 ">
//      {imagesdata.slice(-1).map((image: imageprops) => (
//             <Imagecard key={image.id} imagedat={image} />
//           ))}
//      <Imagecard />
//    </div>
//  </div>;
