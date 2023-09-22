"use client";
import React, { useState } from "react";
import Imagecard from "./Imagecard";
import { Input } from "./ui/input";
import { imageData, tags } from "@/Data/data";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
type Props = {
  imagesdata?: imageprops[];
};

const Sortableuser = ({ items }: any) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: items });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return items.map((image: any, i: any) => (
    <div
      className=""
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      key={i}
    >
      <Imagecard imagedat={image} />
    </div>
  ));
};

const Imagegrid = (props: Props) => {
  const [items, setitems] = useState(imageData);
  const [tagName, setTagName] = useState("");
  const router = useRouter();

  const onDragEnd = (event: any) => {
    console.log("ondragend", event);
  };
  const handleSearch = (tag: string) => {
    if (tag === " ") {
      setitems(imageData);
      return;
    }
    const filteredImages = items.filter((image) => image.tags.includes(tag));

    setitems(filteredImages);
  };
  return (
    <main className="max-w-[80%] mx-auto ">
      <div className="w-full flex">
        <div className="lg:w-[60%]"></div>
        <form
          className="flex-1 flex justify-between items-center gap-x-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(tagName.toLowerCase());
            router.refresh();
          }}
        >
          <Input
            className=""
            onChange={(e) => setTagName(e.currentTarget.value)}
            id="tag-name"
            placeholder="Search image by tag..."
            value={tagName}
          />
          <Button type="submit">search</Button>
        </form>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4">
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            <Sortableuser items={items} />
          </SortableContext>
        </DndContext>
      </div>
    </main>
  );
};

export default Imagegrid;
