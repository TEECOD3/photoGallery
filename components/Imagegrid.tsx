"use client";
import React, { useState } from "react";
import Imagecard from "./Imagecard";
import { Input } from "./ui/input";
import { imageData, tags } from "@/Data/data";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
type Props = {
  imagesdata?: any;
};

const Imagegrid = (props: Props) => {
  const [items, setitems] = useState(imageData);
  const [tagName, setTagName] = useState("");

  const router = useRouter();

  const handleSearch = (tag: string) => {
    if (tag === "") {
      setitems(imageData);
      return;
    }
    const filteredImages = imageData.filter((image) =>
      image.tags.includes(tag)
    );

    setitems(filteredImages);
  };

  const onDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }

    setitems((items) => {
      const oldindex = items.findIndex((item) => item.id === active?.id);
      const newindex = items.findIndex((item) => item.id === over?.id);
      return arrayMove(items, oldindex, newindex);
    });
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

      {items.length === 0 ? (
        <div className=" w-full flex h-[80vh] items-center justify-center">
          <p>
            😒No animals found for
            <span className=" ml-3 font-bold text-xl text-gray-400">
              {tagName}
            </span>
          </p>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4">
          <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext
              items={items}
              strategy={verticalListSortingStrategy}
            >
              {items.map((item) => (
                <Imagecard imagedat={item} key={item.id} />
              ))}
            </SortableContext>
          </DndContext>
        </div>
      )}
    </main>
  );
};

export default Imagegrid;
