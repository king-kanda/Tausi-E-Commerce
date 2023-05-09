'use client';

import React , {useState } from 'react'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Roslindale from 'next/font/local'
import { BsSearch ,BsCart3 } from 'react-icons/bs'
import { VscAccount } from 'react-icons/vsc'

const roslindale = Roslindale({ 
  src: '../../public/fonts/Roslindale-DisplayCondensedMedium-Testing.woff2',
  display: 'swap',
 })

const inter = Inter({ subsets: ['latin'] })

const Nav = () => {
    
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdown = () => {
      setShowDropdown(!showDropdown);
    };

    return (
        <div className="container bg-transparent  top-0 z-10">            
            <nav className="flex bg-white   items-center justify-between ">
                    <div className="p-4">
                        <ul className={`flex flex-col mt-4 md:flex-row md:space-x-4 md:mt-0   text-red ${inter.className}` }>
                        <li className="p-4 hover:underline cursor-pointer relative" onMouseOver={handleDropdown}>
                            Shop
                                {showDropdown && (
                                    <ul className="absolute top-8 bg-white w-full p-2  shadow-md">
                                    <li className="py-2 hover:underline">
                                        <Link href="/">Category 1</Link>
                                    </li>
                                    <li className="py-2 hover:underline">
                                        <Link href="/">Category 2</Link>
                                    </li>
                                    <li className="py-2 hover:underline">
                                        <Link href="/">Category 3</Link>
                                    </li>
                                    </ul>
                                )}
                            </li>
                            <li className="p-4">
                                <Link href="/about">
                                    Discover 
                                </Link>
                            </li>
                            <li className="p-4">
                                <Link href="/about">
                                    Stores 
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="md:hidden sm:block px-4">
                        <button 
                            type="button"
                            className="text-black px-4 py-3 rounded "
                            // onClick={handleToggle}
                        >
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>

                    <div className="hidden  md:block md:w-auto " id="mobile-menu">
                        <h3 className={`text-4xl ${roslindale.className} text-red text-center`}>tausi </h3>
                    </div>

                    <div className="hidden md:block w-56">
                        <ul className={`flex flex-col mt-4 md:flex-row md:space-x-4 md:mt-0 md:text-xl text-red  ${inter.className}` }>
                            <li className=" hover:underline px-4 py-4">
                                <Link href="/">
                                    <VscAccount/>
                                </Link>
                            </li>
                            <li className="px-4 py-4">
                                <Link href="/about">
                                    <BsSearch/>
                                </Link>
                            </li>
                            
                            <li className="px-4 py-4 relative">
                                <Link href="/about">
                                    <span className="inline-block bg-gray-dark text-white text-xs font-bold rounded-full px-2 py-1 absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/5">
                                    2
                                    </span>
                                    <BsCart3 />
                                </Link>
                            </li>
                        </ul>
                    </div>
            </nav>
        </div>
        
    );
}

export default Nav;