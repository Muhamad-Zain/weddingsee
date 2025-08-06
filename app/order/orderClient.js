'use client'

import { useSearchParams } from "next/navigation";
import { GiBasket } from "react-icons/gi";
import Image from "next/image";
import data from "../data/data";
// import data from "..data/data/data"; // pastikan path benar

export default function OrderClient() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const card = data.find((item) => item.id.toString() === id);

  if (!card) {
    return <div>Template tidak ditemukan.</div>;
  }

  const message = `Hallo, Saya ingin memesan Undangan Digital dari Template ${card.name}`;
  const urlWa = `https://wa.me/6285778480169?text=${encodeURIComponent(message)}`;

  return (
    <div className="max-w-md text-center mx-auto">
      <Image
        src={card.Img}
        width={1000}
        height={1000}
        alt="order view"
        className="w-full sm:w-full mx-auto sm:border-2 border-fuchsia-800 sm:p-1 sm:rounded-lg"
      />
      {/* ...lanjutkan isi konten kamu di sini */}
      <div className="fixed bottom-0 w-full sm:w-sm md:w-md bg-white rounded-t-md p-2">
        <p className="font-bold underline">{card.name}</p>
        <div className="flex justify-around items-center text-md sm:text-lg">
          <p>Price :</p>
          <p>Rp. 60.000</p>
        </div>
        <a
          href={urlWa}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-fuchsia-800/70 p-2 w-full my-5 rounded-md flex justify-center items-center text-white"
        >
          <GiBasket className="mr-2" />
          <p>Lanjut Order</p>
        </a>
      </div>
    </div>
  );
}
