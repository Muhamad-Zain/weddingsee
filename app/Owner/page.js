'use client'
import Image from "next/image";
import Navbar from "../navbar/page";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Dashboard from "./dashboard/page";
import ListInvite from "./list-invite/page";
import CreateInvite from "./create-invite/page";

export default function LayoutDashboard({children}) {
    // const [dashboard, setDashboard] = useState(true)
    // const [allInv, setAllinv] = useState(false)
    // const [create, setCreate] = useState(false)
    const [activeMenu, setActiveMenu] = useState('dashboard')


// const pathname = usePathname();

// const isActive = (path) => pathname === path;
 
    const handleActive = (menu) => {
  setActiveMenu(menu);
};

    return(
        <div>
            {/* <Navbar /> */}
            <div className="flex justify-between items-center bg-blue-200 z-10 fixed w-full top-0 left-0 py-2">
                <Image 
                    src={'/assets/logo.png'}
                    alt="logo-navbar"
                    width={500}
                    height={500}
                    className="rounded-full w-20 h-20 border-2 border-fuchsia-800 ml-40 " />
                <h1 className="dancing text-5xl font-bold mr-40" style={{textShadow:'1.5px 1.5px #000'}}>Wedding See</h1>
            </div>
            <div className="fixed w-52 h-screen bg-white shadow-md shadow-blue-300 top-0 left-0 bg-">
                <div className="mt-36 px-5  text-center relative ">
                    <button
                     className={`p-3 text-sm w-40 play rounded-full my-2 ${activeMenu === 'dashboard' ? 'bg-blue-300' : ''}`}
                     onClick={() => handleActive('dashboard')}>Dashboard</button>
                    <div className="border-b-2 border-b-gray-300 w-40" />
                    <button 
                     className={`p-3 text-sm w-40 play rounded-full my-2 ${activeMenu === 'listInvite' ? 'bg-blue-300' : ''}`}
                     onClick={() => handleActive('listInvite')}>Daftar Undangan</button>
                    <div className="border-b-2 border-b-gray-300 w-40" />
                    <button
                      className={`p-3 text-sm w-40 play rounded-full my-2 ${activeMenu === 'createInvite' ? 'bg-blue-300' : ''}`}
                     onClick={() => handleActive('createInvite')}>Buat Undangan</button>
                </div>
            </div>
            <main className="mt-32 pl-56 sm:pl-40 ">
                {/* {children} */}
                {activeMenu === 'dashboard' && <Dashboard />}
                {activeMenu === 'listInvite' && <ListInvite />}
                {activeMenu === 'createInvite' && <CreateInvite />}
            </main>
        </div>
    )
}