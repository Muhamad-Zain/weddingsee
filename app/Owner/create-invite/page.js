import data from "@/app/data/data";
import Image from "next/image";
import Link from "next/link";

export default function CreateInvite() {
    return(
        <main className="grid grid-cols-3 gap-4 m-5">
            {data.map((items,index) => (
                <div 
                key={index}
                className="bg-white shadow shadow-black p-2 rounded-md ">
                <Image 
                 src={items.Img}
                 width={1000}
                 height={1000}
                 alt="Image-create"
                 className=" rounded-sm"
                />
                <p className="pt-2 text-center">{items.name}</p>
                {/* <p></p> */}
                <div className="flex justify-around text-sm text-red-700">
                    <p>Price :</p>
                    <p>50.000</p>
                </div>
                <Link href={items.create}
                className="bg-blue-300 w-full flex justify-center text-center p-2 rounded-sm mx-auto" >create</Link>
            </div>
            ))}
        </main>
    )
}