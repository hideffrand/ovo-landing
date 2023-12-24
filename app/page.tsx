"use client"

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  const followerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Update the position of the follower div based on mouse coordinates
      const x = event.clientX - followerRef.current.clientWidth / 2;
      const y = event.clientY - followerRef.current.clientHeight / 2;

      followerRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div ref={followerRef} className="follower"></div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden">
        <h1>apakah ini poppins</h1>
        <Image src="/logo.png" alt="woi" width={30} height={30} />
      </main>
    </>
  );
}
