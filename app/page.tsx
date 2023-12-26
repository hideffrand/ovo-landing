"use client";

import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";

export default function Home() {
  const imgLeftRef = useRef<HTMLImageElement | null>(null);
  const imgRightRef = useRef<HTMLImageElement | null>(null);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;

    if (imgLeftRef.current) {
      imgLeftRef.current.style.transform = `translateX(${
        scrollPosition * 0.08
      }px)`;
    }

    if (imgRightRef.current) {
      imgRightRef.current.style.transform = `translateX(-${
        scrollPosition * 0.08
      }px)`;
    }
  }, [imgLeftRef, imgRightRef]);

  useEffect(() => {
    // Make the scroll event only happend on pc
    const isPC = window.innerWidth > 768;
    if (isPC) {
      document.addEventListener("scroll", handleScroll);

      return () => {
        document.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  return (
    <>
      <Navbar />
      <main
        id="home"
        className="flex w-full h-auto flex-col items-center justify-between px-6 md:px-24 py-40 md:py-52"
      >
        <h1 className="text-4xl md:text-7xl text-center md:translate-y-0">
          Dompet
          <span className="bg-gradient-to-r from-purple to-soft-purple inline text-transparent bg-clip-text">
            {" "}
            Digital
          </span>
          <br></br>
          Terbaik Anda!
        </h1>
        <p className="py-6 text-sm md:text-xl text-center text-gray-300 md:w-1/3">
          OVO merupakan aplikasi smart yang memberikan Anda kesempatan lebih
          besar mengumpulkan poin di banyak tempat.
        </p>
        <div className="flex w-1/2 items-center justify-center gap-2">
          <Image
            src="/apple-store-badge.svg"
            alt="woi"
            width={200}
            height={100}
            loading="lazy"
            className="w-36 shadow-md hover:bg-purple hover:rounded-md hover:shadow-purple transition duration-200 ease-in-out hover:-translate-y-1 cursor-pointer"
          />
          <Image
            src="/google-play-badge.png"
            alt="woi"
            width={200}
            height={100}
            loading="lazy"
            className="w-36 md:w-40 shadow-md hover:bg-purple hover:rounded-md hover:shadow-purple transition duration-200 ease-in-out hover:-translate-y-1 cursor-pointer"
          />
        </div>
        <div className="flex relative items-center justify-center gap-20 py-40">
          <Image
            src="/qr-screen.jpg"
            alt="woi"
            width={500}
            height={500}
            ref={imgLeftRef}
            className="rounded-lg w-1/4 md:rounded-2xl"
            loading="lazy"
          />
          <Image
            src="/mock-main.png"
            alt="woi"
            width={500}
            height={500}
            className="z-10 absolute w-1/3 filter drop-shadow-lg"
            priority={true}
          />
          <Image
            src="/topup-screen.jpg"
            alt="woi"
            width={500}
            height={500}
            ref={imgRightRef}
            className="w-1/4 rounded-lg md:rounded-2xl"
            loading="lazy"
          />
        </div>
        <div className="mb-40 text-center w-full flex flex-col items-center gap-4">
          <h1 className="text-xl md:text-4xl font-bold">
            All in{" "}
            <span className="text-transparent bg-gradient-to-r from-purple to-soft-purple inlne bg-clip-text">
              ONE
            </span>
          </h1>
          <p className="text-gray-200 w-full md:w-1/2 text-sm md:text-xl">
            Hadirkan kemudahan dan kenyamanan ke hidup Anda dengan OVO, teman
            setia dalam setiap perjalanan finansial Anda. Temukan kebebasan
            tanpa batas dan alur pembayaran yang cepat, tanpa repot!
          </p>
        </div>
        <a
          href="#features"
          className="animate-bounce text-xl bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-2 px-4 shadow-md hover:rounded-md hover:shadow-purple transition duration-200 ease-in-out cursor-pointer"
        >
          Learn more
        </a>
      </main>
      <FeaturesSection />
      <Footer />
    </>
  );
}
