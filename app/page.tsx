"use client";

import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  const imgLeftRef = useRef<HTMLImageElement | null>(null);
  const imgRightRef = useRef<HTMLImageElement | null>(null);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;

    if (imgLeftRef.current) {
      imgLeftRef.current.style.transform = `translateX(${
        scrollPosition * 0.18
      }px)`;
    }

    if (imgRightRef.current) {
      imgRightRef.current.style.transform = `translateX(-${
        scrollPosition * 0.18
      }px)`;
    }
  }, [imgLeftRef, imgRightRef]);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <Navbar />
      <main className="flex w-full h-auto flex-col items-center justify-between px-6 md:px-24 py-40 md:py-52">
        <h1 className="text-4xl md:text-7xl text-center translate-y-20 md:translate-y-0">
          Dompet
          <span className="text-purple"> Digital</span>
          <br></br>
          Terbaik Anda!
        </h1>
        <div className="flex relative items-center justify-center gap-20 py-40">
          <Image
            src="/qr-screen.jpg"
            alt="woi"
            width={300}
            height={100}
            ref={imgLeftRef}
            className="image-left rounded-lg w-1/4 md:rounded-2xl"
            loading="lazy"
          />
          <Image
            src="/mock-main.png"
            alt="woi"
            width={300}
            height={300}
            className="z-10 absolute w-1/3 filter drop-shadow-lg"
            priority={true}
          />
          <Image
            src="/topup-screen.jpg"
            alt="woi"
            width={300}
            height={300}
            ref={imgRightRef}
            className="image-right w-1/4 rounded-lg md:rounded-2xl"
            loading="lazy"
          />
        </div>
        <div className="md:mb-40 text-center w-full flex flex-col items-center gap-4">
          <h1 className="text-xl md:text-4xl font-bold">
            ALL IN <span className="text-purple font-bold">ONE</span>
          </h1>
          <p className="text-gray-200 w-full md:w-1/2 text-sm md:text-xl">
            Hadirkan kemudahan dan kenyamanan ke hidup Anda dengan OVO, teman
            setia dalam setiap perjalanan finansial Anda. Temukan kebebasan
            tanpa batas dan alur pembayaran yang cepat, tanpa repot!
          </p>
        </div>
        <p className="animate-bounce text-xl translate-y-10 mt-20">Learn more</p>
      </main>
      <div className="relative w-full p-20">
        <div className="w-full h-screen p-20 text-center sticky top-10">
          <h1 className="text-7xl">Benefit</h1>
        </div>
        <div className="w-full h-screen p-20 text-center sticky top-0 z-10 bg-purple">
          <h1 className="text-7xl">ok</h1>
        </div>
        <div className="w-full h-screen p-20 text-center relative z-20 bg-white">
          <h1 className="text-7xl">ok</h1>
        </div>
      </div>
    </>
  );
}
