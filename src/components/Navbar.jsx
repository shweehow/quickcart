import React from 'react'
import { assets } from "@/assets/assets";
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='flex justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700'>
        <Image className="cursor-pointer w-28 md:w-32" src={assets.logo} alt="logo" />
        
        <div className="max-md:hidden flex items-center gap-4 lg:gap-8">
            <Link className='hover:text-gray-900' href="/">Home</Link>
            <Link className='hover:text-gray-900' href="/all-products">Shop</Link>
            <Link className='hover:text-gray-900' href="/">About Us</Link>
            <Link className='hover:text-gray-900' href="/">Contact</Link>

            <button className='px-4 py-1.5 border rounded-full text-xs'>Seller Dashboard</button>
        </div>

        <div className="max-md:hidden flex items-center gap-4">
            <Image className='cursor-pointer' src={assets.search_icon} alt="search icon" />
            <button className='flex items-center gap-2 hover:text-gray-900'>
                <Image src={assets.user_icon} alt="user icon" />
                Account
            </button>
        </div>

        <div className="md:hidden flex items-center gap-3">
            <button className='max-xs:hidden px-4 py-1.5 border rounded-full text-xs'>Seller Dashboard</button>
            <Image className='cursor-pointer' src={assets.search_icon} alt="search icon" />
            <button className='flex items-center gap-2 hover:text-gray-900'>
                <Image src={assets.user_icon} alt="user icon" />
                Account
            </button>
        </div>
    </nav>
  )
}

export default Navbar;