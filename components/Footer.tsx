import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div
        id="footer"
        className="w-full px-10 md:px-40 py-10 flex md:flex-row flex-col justify-between gap-10"
      >
        <div className="flex flex-col gap-4">
          <Image
            src="/logo-text.png"
            alt="woi"
            width={200}
            height={100}
            className="w-20 h-1/3"
          />
          <p>Download OVO Sekarang dan Dapatkan Manfaatnya</p>
          <div className="flex items-center gap-2">
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
        </div>
        <div className="flex flex-col">
          <a className="hover:text-purple" href="">
            Contact us
          </a>
          <a className="hover:text-purple" href="">
            How to Top up
          </a>
          <a className="hover:text-purple" href="">
            FAQ
          </a>
          <a className="hover:text-purple" href="">
            Privacy Policy
          </a>
        </div>
        <div className="flex flex-col">
          <a className="hover:text-purple" href="">
            Information
          </a>
          <a className="hover:text-purple" href="">
            Career
          </a>
          <a className="hover:text-purple" href="">
            Help Center
          </a>
          <a className="hover:text-purple" href="">
            Terms and Conditions
          </a>
        </div>
      </div>
      <footer className="w-full px-10 md:px-40 py-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-300 py-2">
          @ 2023 | <a href="https://github.com/hideffrand">Deffrand</a>
        </p>
        <div className="flex gap-2 text-gray-300 text-sm">
          <a className="hover:underline" href="https://github.com/hideffrand">
            Github
          </a>
          <a
            className="hover:underline"
            href="https://www.linkedin.com/in/deffrand-farera/"
          >
            LinkedIn
          </a>
          <a
            className="hover:underline"
            href="https://www.instagram.com/deffrand_f/"
          >
            Instagram
          </a>
        </div>
      </footer>
    </>
  );
}
