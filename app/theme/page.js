'use client'
import Image from "next/image";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import { GiBasket } from "react-icons/gi";
import data from "../data/data";
import { useSearchParams } from "next/navigation";


export default function Theme() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const card = data.find((item) => item.id.toString() === id);

    
    return(
         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {data.map((card, index) => (
            <div
              key={index}
              className="border-2 border-fuchsia-800 rounded-xl p-1"
            >
              <Image
                src={card.Img}
                alt="image"
                width={1000}
                height={1000}
                className="w-full rounded-md"
              />
              <div className="text-center">
                <p className="font-bold pt-2">{card.name}</p>
                <div className="flex justify-around items-center sm:w-48 mx-auto">
                  <h2 className="bg-fuchsia-800/50 p-1 rounded-md text-sm text-white font-bold">
                    40%
                  </h2>
                  <h2 className="line-through font-bold text-red-500 italic">
                    Rp. 100.000
                  </h2>
                </div>
                <h2 className="font-bold">Rp. 60.000</h2>
                <Link
                  href={card.Preview}
                  className="border border-fuchsia-800/70 p-2 rounded-md flex justify-center items-center text-fuchsia-800 my-2"
                >
                  <FaRegEye className="mr-2" />
                  <p>Lihat Preview</p>
                </Link>
                <Link
                  href={`/suspense?id=${card.id}`}
                  className="bg-fuchsia-800/70 p-2 rounded-md flex justify-center items-center text-white"
                >
                  <GiBasket className="mr-2" />
                  <p>Order</p>
                </Link>
              </div>
            </div>
          ))} 
      </div>
    )
}