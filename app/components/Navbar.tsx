import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between py-10 px-20 fixed z-30">
        <Image src="/logo.png" alt="woi" width={30} height={30} />
        <Image src="/logo.png" alt="woi" width={30} height={30} />
    </nav>
  )
}