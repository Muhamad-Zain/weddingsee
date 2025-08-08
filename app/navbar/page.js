'use client'
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Navbar() {
     const [scrolled, setScrolled] = useState(false)
    
      useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 2)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
      }, [])
    return(
        <div
                className={`transition-all duration-500 ease-in-out z-50 w-full ${
                  scrolled
                    ? 'fixed left-0 top-0 bg-white/90 backdrop-blur-md shadow-md py-2'
                    : 'relative py-10'
                }`}
              >
                <div
                  className={`transition-all duration-500 ease-in-out flex items-center justify-center gap-4 ${
                    scrolled ? 'flex-row scale-90' : 'flex-col scale-100'
                  }`}
                >
                  <h1
                    className="text-center text-4xl sm:text-6xl text-fuchsia-900 italic play font-bold"
                    style={{
                      textShadow: '2px 2px 4px rgba(136, 19, 152, 0.4)',
                    }}
                  >
                    Welcome to
                  </h1>
        
                  <Image
                    src="/assets/logo.png"
                    width={1000}
                    height={1000}
                    alt="logo"
                    className={`rounded-full mt-3  border-3 border-[#9e0f92] ${scrolled ? 'w-[4rem] h-[4rem]' : 'w-[6rem] h-[6rem] sm:w-[8rem] sm:h-[8rem]'}`}
                  />
        
                  {!scrolled && (
                    <>
                      <h1 className="dancing text-2xl font-bold">Wedding See</h1>
                      <p className="bg-fuchsia-800/80 w-fit mx-auto rounded-xl text-xs py-2 px-4 text-white mt-1">
                        Platform Undangan Digital #1
                      </p>
                    </>
                  )}
                </div>
              </div>
    )
}