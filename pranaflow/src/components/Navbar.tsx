"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";

import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
<>
<div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 opacity-80", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home" >
                
          </MenuItem >
        </Link>
        <Link href={"/dashboard"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Dashboard" >
                
          </MenuItem >
        </Link>
        <Link href={"/about"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="About" >
                
          </MenuItem >
        </Link>
        <MenuItem
            setActive={setActive}
            active={active}
            item="Explore" >
                <div className="text-sm flex flex-col space-y-4  ">
                <HoveredLink href="/courses">Habit Tracking</HoveredLink>
                <HoveredLink href="/courses">Community Engagement</HoveredLink>
                <HoveredLink href="/courses">Gamification</HoveredLink>
                </div>
          </MenuItem>
          <Link href={"/profile"}>
          
          <MenuItem
            setActive={setActive}
            active={active}
            item="Profile" >
                
          </MenuItem>
          </Link>
      </Menu>
    </div>
    
</>
  );
}

export default Navbar;
