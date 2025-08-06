'use client';

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { GiBasket } from 'react-icons/gi';
import data from '../data/data';
// import data from ''; // pastikan path-nya benar

export default function OrderPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const card = data.find((item) => item.id.toString() === id);

  if (!card) {
    return <div>Template tidak ditemukan.</div>;
  }

  const message = `Hallo, Saya ingin memesan Undangan Digital dari Template ${card.name}`;
  const encodedPesan = encodeURIComponent(message);
  const urlWa = `https://wa.me/6285778480169?text=${encodedPesan}`;

  return (
    <div className="max-w-md text-center mx-auto">
      <Image
        src={card.Img}
        width={1000}
        height={1000}
        alt="order view"
        className="w-full sm:w-full mx-auto sm:border-2 border-fuchsia-800 sm:p-1 sm:rounded-lg"
      />
      <p className="text-xl py-5 font-bold">Deskripsi</p>
      <p className="text-sm px-2">
        💍 "<span className="font-semibold">{card.name}</span>" <br />
        Tema Elegan dan Modern untuk Hari Bahagiamu...
      </p>
      <div className="mb-56 mt-10">
        <h2 className="underline">Template Undangan ini membutuhkan :</h2>
        <ul className="list-disc text-left pl-12">
          <li>Nama mempelai</li>
          <li>Tgl Acara</li>
          <li>Share location</li>
          <li>Alamat </li>
          <li>No. Rekening Bank (Opsional)</li>
          <li>
            Foto Pasangan{' '}
            {card.name === 'Wedding Romantic 03' || card.name === 'Wedding Romantic 04'
              ? '9 Foto'
              : '8 Foto'}
          </li>
        </ul>
      </div>
      <div className="fixed w-full sm:w-sm md:w-md bottom-0 rounded-t-md p-2 bg-white">
        <p className="font-bold underline">{card.name}</p>
        <div className="text-md sm:text-lg flex justify-around items-center">
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
