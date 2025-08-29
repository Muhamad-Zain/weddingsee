import data from "@/app/data/data";
import Image from "next/image";
import Link from "next/link";
import '../../globals.css'

export default function ListInvite() {
    // console.log(data);
    
    return(
        <div>
            <h1 className="play font-bold text-2xl p-2">Daftar Undangan</h1>
            {/* <table className="table-auto w-full border-separate border-spacing-y-5 rounded-2xl ">
                <thead>
                    <tr className="bg-blue-300 m-52">
                        <th className="w-16  p-5">No</th>
                        <th className="text-left">Theme</th>
                        <th>Name</th>
                        <th>Terdaftar</th>
                        <th>Preview Undangan</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((items, index) => (
                        <tr  key={items.id} className="text-center bg-white rounded-md   ">
                            <td>{index + 1}</td>
                            <td className="">
                                <Image 
                                src={items.Img}
                                alt="preview list image"
                                width={500}
                                height={500}
                                className="w-32 h-32 rounded-md m-5"
                                /></td>
                            <td>{items.name}</td>
                            <td>10</td>
                            <td>
                                <Link href={items.Preview}>
                                Preview
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
            <div className="bg-black/10 p-5 rounded-md h-[70vh] overflow-y-auto scrollbar-none  relative">
                <div className="font-bold flex justify-around w-full bg-blue-300 p-5 rounded-md">
                    <h1 className="w-[5%] ">No</h1>
                    <h1 className="w-[35%]">Theme</h1>
                    <h1 className=" w-[35%]">Name Theme</h1>
                    <h1 className="w-[15%]">Terdaftar</h1>
                    <h1 className=" w-[20%]">Preview Undangan</h1>
                </div>
            {
                data.map((items,index) => (
                    <div key={items.id} className="flex justify-around items-center my-5 p-5 bg-white rounded-md  scroll-auto">
                        <h1 className="w-[5%] ">{items.id}</h1>
                        <div className="w-[35%] ">
                            <Image 
                            src={items.Img}
                            alt="preview list image"
                            width={500}
                            height={500}
                            className="w-24 h-24 rounded-md "
                            />
                        </div>
                        <p className="w-[35%] ">{items.name}</p>
                        <p className="w-[15%]  ">10</p>
                        <Link href={items.Preview} className="w-[20%] ">Preview</Link>
                        <div>

                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}