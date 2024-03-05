"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Presenting Swayam",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/placeholderimage.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Presenting Swayam",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/placeholderimage.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Presenting Swayam",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/placeholderimage.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
];
const ParallaxScroll = () => {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
};

export default ParallaxScroll;
