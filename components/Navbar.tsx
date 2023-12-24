import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <nav className="w-full flex justify-between items-center py-6 px-10 md:px-40 fixed z-30">
        <Image
          src="/logo.png"
          alt="woi"
          width={50}
          height={40}
          className="rounded-full"
        />
        <div className="flex items-center gap-10">
          <div className="hidden md:flex gap-4 items-center">
            <a className="hover:border-b-4 px-4 py-1 border-purple" href="">
              Home
            </a>
            <a className="hover:border-b-4 px-4 py-1 border-purple" href="">
              About
            </a>
            <a className="hover:border-b-4 px-4 py-1 border-purple" href="">
              Deals
            </a>
            <a className="hover:border-b-4 px-4 py-1 border-purple" href="">
              Promo
            </a>
          </div>
          <div className="hidden md:block">
            <button className="hidden md:block cta-button">Download</button>
          </div>
        </div>
        <div
          className="md:hidden flex flex-col items-center gap-2"
          onClick={() => setSidebar(!sidebar)}
        >
          <div className="rounded-full h-1 w-8 bg-white"></div>
          <div className="rounded-full h-1 w-8 bg-white"></div>
          <div className="rounded-full h-1 w-8 bg-white"></div>
        </div>
      </nav>
      {sidebar && (
        <div className="fixed z-30 bg-black h-screen w-2/3 right-0 backdrop-filter backdrop-blur-lg bg-opacity-50">
          <button
            onClick={() => setSidebar(!sidebar)}
            className="absolute right-0 pt-6 pr-10 text-4xl"
          >
            X
          </button>
          <div className="w-full h-screen flex flex-col items-center justify-around">
            <div className="w-full flex flex-col items-center gap-10 p-10 text-xl">
              <a
                className="pb-2 border-b w-full hover:border-purple"
                onClick={() => setSidebar(!sidebar)}
                href="#home"
              >
                Home
              </a>
              <a
                className="pb-2 border-b w-full hover:border-purple"
                onClick={() => setSidebar(!sidebar)}
                href="#about"
              >
                About
              </a>
              <a
                className="pb-2 border-b w-full hover:border-purple"
                onClick={() => setSidebar(!sidebar)}
                href=""
              >
                Benefits
              </a>
              <a
                className="pb-2 border-b w-full hover:border-purple"
                onClick={() => setSidebar(!sidebar)}
                href=""
              >
                Help
              </a>
            </div>
            <button className="bg-purple px-4 py-2 rounded-full hover:bg-black">
              Download Now
            </button>
          </div>
        </div>
      )}
    </>
  );
}
