import Image from "next/image";
import { useState } from "react";

interface FeaturesInterface {
  title: string;
  desc: string;
  img: string;
}

export default function FeaturesSection() {
  const [currImg, setCurrImg] = useState<string>("/screens/screen-landing.png");
  const [showDesc, setShowDesc] = useState<number | null>(null);

  const features: FeaturesInterface[] = [
    {
      title: "Simpel, Praktis, dan Lengkap",
      desc: "OVO membawa kemudahan dalam genggaman Anda. Dengan tiga kata kunci: simpel, praktis, dan lengkap, nikmati pengalaman bertransaksi yang terintegrasi dan tak ribet.",
      img: "/screens/screen-main.png",
    },
    {
      title: "Top up Dimana Saja",
      desc: 'Pengalaman top-up tak terbatas! Dengan fitur "Top Up Dimana Saja" OVO, Anda bisa mengisi saldo dengan mudah dan cepat, di manapun Anda berada.',
      img: "/screens/screen-topup.png",
    },
    {
      title: "Bayar Pakai QRIS",
      desc: 'Bayar tagihan atau belanja dengan mudah menggunakan fitur "Bayar Pakai QRIS" OVO. Tinggal pindai QRIS, transaksi selesai, simpel dan cepat!',
      img: "/screens/screen-qr.png",
    },
    {
      title: "1 OVO Points = Rp 1",
      desc: "Setiap OVO Points bernilai uang! Nikmati keuntungan langsung dengan nilai tukar 1 OVO Points = Rp 1, memberikan Anda nilai lebih pada setiap transaksi.",
      img: "/screens/screen-points.png",
    },
    {
      title: "OVO Invest",
      desc: 'OVO tidak hanya tentang transaksi harian, tapi juga peluang investasi. Temukan kemudahan mengelola keuangan Anda dengan fitur "Investasi Juga Bisa!" yang ditawarkan.',
      img: "/screens/screen-invest.png",
    },
  ];
  return (
    <div id="features" className="relative">
      <div className="w-full px-10 md:px-40 py-40 bg-black flex items-center justify-start relative">
        <Image
          src={currImg}
          alt="woi"
          width={1000}
          height={1000}
          className="hidden md:block w-1/3 z-0 floating-element absolute right-0 mr-40 transition duration-200"
        />
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-10 relative z-10">
          <p className="text-gray-400">
            Mau tahu apa saja yang bisa dilakukan dengan OVO? Anda bisa:
          </p>
          {features.map((feature, i) => (
            <div
              key={i}
              className="w-full pb-10 border-b"
              onMouseEnter={() => {
                setShowDesc(i);
                setCurrImg(feature.img);
              }}
              onMouseLeave={() => {
                setShowDesc(i);
                setCurrImg("/screens/screen-landing.png");
              }}
              onClick={() => setShowDesc(i)}
            >
              <h1 className="text-2xl text-white">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple to-soft-purple inline text-transparent bg-clip-text">
                  {i + 1}.
                </span>
                {feature.title}
              </h1>
              {showDesc === i && (
                <p className="text-xl text-gray-300">{feature.desc}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
