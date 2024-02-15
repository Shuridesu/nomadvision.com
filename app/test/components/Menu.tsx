'use client'

import { useClickAway } from "react-use";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Hamburger from "hamburger-react";
import { Button } from "@/components/ui/button";

export default function Menu() {
    const [isOpen, setOpen] = useState(false);

  return (
    <div className = {`flex items-center justify-center w-14 h-14 rounded-lg duration-300 transition-all bg-sky-900 text-white ease-in-out ${isOpen?"":""}`}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
        
    </div>
    
  )
}
