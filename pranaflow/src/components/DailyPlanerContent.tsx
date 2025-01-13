"use client";
import React from "react";
import { Anton } from "next/font/google";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const anton = Anton({
    subsets: ["latin"],
    weight: ["400"], // Anton supports only 400 weight
    display: "swap", // Optimizes font rendering
  });
const DailyPlanerContent = () => {
  return (
   <>
<div className="main mt-16 flex flex-col">
<div className={`${anton.className} ml-12  font-bold text-5xl `}>Let's</div>
   <div className='middle'>
   <div className="h-[25rem] flex items-center justify-center">
      <TextHoverEffect text="IMPROVE" />
    </div>
   </div>
   <div className={`${anton.className} ml-[700px]  font-bold text-5xl `}>Your Daily Planning with the Power of AI</div>
</div>
   </>
  )
}

export default DailyPlanerContent
